"use client";
import { checkout } from "@/utils/validation/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAppContext } from "./productContextProvider/ProductContextProvider";
import OrderCalculation from "./shop/OrderCalculation";
function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkout),
  });

  const { clearCart, cart, invoiceId, setInvoiceId } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => { 
    if (data !== null) {

      const invoiceData = {
        user: {
          id: invoiceId,
          name: data.first_name + " " + data.last_name,
          address: `${data.city} ${data.address} ${data.region}`,
          phone: data.phone,
          email: data.email,
        },
        products: [...cart],
      };

      setInvoiceId(prevInvoiceId => prevInvoiceId + 1);
      setLoading(true); 

      try {
        
        const response = await fetch("/api/place-order/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(invoiceData),
        });

        const result = await response.json();

        if (response.ok) {
          setDownloadLink(result.downloadLink);
          alert(result.message);
        } else {
          alert(`Failed to place order: `);
        }
      } catch (error) {
        alert("Failed to place order due to network or server issue");
      } finally {
        setLoading(false);
      }

      toast.success("Form submitted successfully!");
      clearCart();
    }
  };

  const handleClick = ()=>{
    router.push('/');
  }

  return (
    <div>
      {downloadLink && (
        <div className=" bg-green-700 w-52 text-center mx-auto px-5 py-3">
          <a href={downloadLink} onClick={handleClick} download>
            Download Invoice
          </a>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
          <div className="col-span-8 border border-gray-200 p-4 rounded">
            <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-gray-600">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("first_name", { required: true })}
                    type="text"
                    name="first_name"
                    id="first-name"
                    className="input-box"
                  />
                  <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                    {errors.first_name?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="last-name" className="text-gray-600">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    name="last_name"
                    id="last-name"
                    className="input-box"
                  />
                  <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                    {errors.last_name?.message}
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor="company" className="text-gray-600">
                  Company
                </label>
                <input
                  {...register("company", { required: true })}
                  type="text"
                  name="company"
                  id="company"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.company?.message}
                </p>
              </div>
              <div>
                <label htmlFor="region" className="text-gray-600">
                  Country/Region
                </label>
                <input
                  {...register("region", { required: true })}
                  type="text"
                  name="region"
                  id="region"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.region?.message}
                </p>
              </div>
              <div>
                <label htmlFor="address" className="text-gray-600">
                  Street address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  name="address"
                  id="address"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.address?.message}
                </p>
              </div>
              <div>
                <label htmlFor="city" className="text-gray-600">
                  City
                </label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  name="city"
                  id="city"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.city?.message}
                </p>
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-600">
                  Phone number
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.phone?.message}
                </p>
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600">
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  className="input-box"
                />
                <p className="text-[#fd3d57] text-[12px] pt-[4px]">
                  {errors.email?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4 border border-gray-200 p-4 rounded">
            <OrderCalculation></OrderCalculation>

            <button
              type="submit"
              className="block w-full py-3 px-4 text-center text-white  border border-slate-500 rounded-md hover:bg-transparent  transition font-medium"
              style={{ backgroundColor: "#00A9E1" }}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

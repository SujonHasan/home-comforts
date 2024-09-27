"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

function BillingModal({
  setShowBillingModal,
  handleBillingUpdate,
}) {

  const { billing } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: billing,
  });

  console.log("hello billing =====  ");

  const onSubmit = (data) => {
    console.log(data);
    handleBillingUpdate(data);
    setShowBillingModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold">Billing Address</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowBillingModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="Name" className="text-gray-600">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    name="name"
                    id="name"
                    className="input-box"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="text-gray-600">
                    Address <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("address", {
                      required: "Email is required",
                    })}
                    type="text"
                    name="address"
                    id="address"
                    className="input-box"
                  />
                </div>

                <div>
                  <label htmlFor="Zip" className="text-gray-600">
                    Zip <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("zip", { required: "Phone is required" })}
                    type="number"
                    name="zip"
                    id="zip"
                    className="input-box"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-600">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    type="number"
                    name="phone"
                    id="phone"
                    className="input-box"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="border mt-[10px] py-1 px-4 rounded-sm bg-[#00A9E1] text-[#fff]">
                    <input type="submit" />
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowBillingModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BillingModal;

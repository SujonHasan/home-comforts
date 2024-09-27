"use client";
import { performRegister } from "@/app/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function RegisterForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleClick(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirm");

      if (password != confirmPassword) {
        setError("password not match");
      } else {

        const user = { name, email, password };
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if(res.status === 201) {
            toast.success('Registratin successfull');
            router.push("/login");
        }
        setError("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={handleClick}>
      <div className="space-y-2">
        <div>
          <label htmlFor="name" className="text-gray-600 mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="Sujon Hasan"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="sujonhasan@gmail.com"
          />
        </div>
        <div>
          {error ? <span className="text-primary"> {error} </span> : ""}
          <label htmlFor="password" className="text-gray-600 mb-2 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
        <div>
          {error ? <span className="text-primary"> {error} </span> : ""}
          <label htmlFor="confirm" className="text-gray-600 mb-2 block">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="aggrement"
            id="aggrement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">
            I have read and agree to the{" "}
            <a href="#" className="text-[#00A9E1]">
              terms & conditions
            </a>
          </label>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="block w-full py-2 text-center  bg-[#00A9E1] border border-[#00A9E1] rounded hover:bg-transparent hover:text-slate-950 transition uppercase font-roboto font-medium"
        >
          create account
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

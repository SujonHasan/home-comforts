"use client"
import { login, performLogin } from "@/app/action";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {

    const [error, setError] = useState("");
    const router = useRouter();

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || 'http://localhost:3000';

    async function handleSubmit (event){

        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = await login(formData)

            if(!!response.error){
                toast.error(response.error);
                setError(response.error);
            }else{
              toast.success(`Login Successfull`);
              router.push(callbackUrl);
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <>

    <form className="login-form" onSubmit={handleSubmit} >
      <div className="space-y-2">
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[#00A9E1] placeholder-gray-400"
            placeholder="youremail.@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-600 mb-2 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[#00A9E1] placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">
            Remember me
          </label>
        </div>
        <a href="#" className="text-[#00A9E1]">
          Forgot password
        </a>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="block w-full py-2 text-center bg-[#00A9E1] border border-[#00A9E1] rounded hover:bg-transparent hover:text-slate-950 transition uppercase font-roboto font-medium"
        >
          Login
        </button>
      </div>
    </form>
    </>
  );
}

export default LoginForm;

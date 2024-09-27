'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SocialLogins() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || 'http://localhost:3000';

    const handleAuth = async (event) => {
        await signIn("google", {callbackUrl});
      }

      const handleFacebook = async (event) =>{
       await signIn('facebook', {callbackUrl})
      }


  return (
    <>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleFacebook}
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        >
          facebook
        </button>
        <button
          onClick={handleAuth}
          className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
        >
          google
        </button>
      </div>
    </>
  );
}

export default SocialLogins;

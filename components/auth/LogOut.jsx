'use client'
import { signOut } from "next-auth/react"
import { useAppContext } from "../productContextProvider/ProductContextProvider"
const LogOut = () => {

  const {clearAccountDetails} = useAppContext();

  async function handleLogout (){
    clearAccountDetails();
    await signOut({callbackUrl: "http://localhost:3000/login"})
  }
  return (
    <button className="cursor-pointer py-2 bg-slate-700 px-6 rounded-md text-white content-center"
        onClick={handleLogout}
    >Sign Out</button>
  )
}

export default LogOut
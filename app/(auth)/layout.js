import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import connectMongo from "@/services/mongo";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Comforts",
  description: "This is Home Comforts project",
};

export default async function RootLayout({ children }) {
  await connectMongo();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ToastContainer autoClose={2000} />
        <Header sideMenu={false} />
        <Navbar sideMenu={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

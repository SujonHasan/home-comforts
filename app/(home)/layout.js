import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../globals.css";
import connectMongo from "@/services/mongo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContextProvider } from "@/components/productContextProvider/ProductContextProvider";

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
        <ProductContextProvider>
            <Header sideMenu={true} />
            <Navbar sideMenu={true} />
            {children}
            <Footer />
        </ProductContextProvider>
      </body>
    </html>
  );
}

import Ads from "@/components/Main/Ads";
import Banner from "@/components/Main/Banner";
import Categories from "@/components/Main/Categories";
import Features from "@/components/Main/Features";
import NewArrival from "@/components/Main/NewArrival";
import Product from "@/components/Main/Product";
import Image from "next/image";

export const metadata = {
  title: "Home Comforts",
  description: "This is Home Comforts project",
};

export default function Home() {

  return (
    <>
      <Banner/>
      <Features/>
      <Categories/>
      <NewArrival/>
      <Ads/>
      <Product/>
    </>
  );
}

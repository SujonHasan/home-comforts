import { getProduct } from "@/db/queries";
import Image from "next/image";
import SocialContent from "./SocialContent";
import CartWishList from "./CartWishList";
import Quantity from "./Quantity";

async function ProductDetails({ product }) {


  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <Image
            src={product.thumbnail}
            alt="product1"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              src={product.image}
              width={300}
              height={600}
              alt="product2"
              className="w-full cursor-pointer border border-primary"
            />
            <Image
              src={product.image}
              width={300}
              height={600}
              alt="product3"
              className="w-full cursor-pointer border"
            />
            <Image
              src={product.image}
              width={300}
              height={600}
              alt="product4"
              className="w-full cursor-pointer border"
            />
            <Image
              src={product.image}
              width={300}
              height={600}
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <Image
              src={product.image}
              width={300}
              height={600}
              alt="product2"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({product.reviews} Reviews)
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              {product.quantity > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600"> Stock Out</span>
              )}
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600"> {product.brand} </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              {/* <span className="text-gray-600"> {product.category.name} </span> */}
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{product.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-[#00A9E1] font-semibold">
              tk{product.discountPrice}.00
            </p>
            <p className="text-base text-gray-400 line-through">
              tk{product.regularPrice}.00
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <Quantity product={product}></Quantity>

          <CartWishList product={product}></CartWishList>
          <SocialContent productId={product?._id} />
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>{product.productDetails}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
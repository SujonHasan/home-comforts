"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

function Shopcart({ product }) {
  const { addToCart, quantity, setQuantity } = useAppContext();
  const handleToCart = (e) => {
    e.stopPropagation();
    const newProduct = { ...product, quantity };
    console.log(newProduct);
    addToCart(newProduct);
    setQuantity(1);
  };
  const router = useRouter();

  const handleClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div
      className="bg-white shadow rounded overflow-hidden group flex flex-col justify-between"
      onClick={() => handleClick(product._id)}
    >
      <div className="relative">
        <Image
          src={product.thumbnail}
          width={300}
          height={400}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product.name}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-[#00A9E1] font-semibold">
            tk{product.discountPrice}.00
          </p>
          <p className="text-sm text-gray-400 line-through">
            tk{product.regularPrice}.00
          </p>
        </div>
        <div className="flex items-center">
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
          <div className="text-xs text-gray-500 ml-3">({product.reviews})</div>
        </div>
      </div>
      <button
        disabled={product.quantity === 0}
        onClick={handleToCart}
        className="block w-full py-1 text-center text-white bg-slate-500 border border-slate-500 rounded-b hover:bg-transparent hover:text-slate-950 transition"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Shopcart;

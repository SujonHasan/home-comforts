
import { getAllCategoris } from "@/db/queries";
import Image from "next/image";

async function Categories() {
  const categories = await getAllCategoris();

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category) => (
          <div
            className="relative rounded-sm overflow-hidden group"
            key={category._id}
          >
            <Image src={category.photo} alt={category.name} width={300} height={300} className="w-full" />
            <a
              href={`/categories/${category._id}`}
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

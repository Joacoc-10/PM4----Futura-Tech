import React from "react";
import Image from "next/image";
import { Routes } from "@/routes";
import Link from "next/link";

const ProductCard = ({
  name,
  description,
  price,
  stock,
  image,
}: Partial<IProduct>) => {
  const generateUrl = (id: string | number) => {
    return `${Routes.products}/${id}`;
  };
  return (
    <>
      <div className="flex w-[70vw] mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-1/3 h-auto">
          <Link href={generateUrl(name || "default-id")}>
            <Image
              fill
              src={image || "/docs/images/products/apple-watch.png"}
              alt={name || "Imagen del Producto"}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between p-5 w-2/3">
          <div>
            <Link href={generateUrl(name || "default-id")}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                {name || "Nombre del Producto"}
              </h5>
            </Link>
            <p className="text-sm text-gray-500 mb-4 line-clamp-3">
              {description || "Descripcion no disponible"}
            </p>
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                {stock ? `${stock} en stock` : "Agotado"}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            {" "}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price ? `$${price}` : "Precio no disponible"}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
            >
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import { getProductById } from "@/app/services/products";
import Button from "@/components/ui/Button";
// import { productsSample } from "@/helpers/products";
import { Routes } from "@/routes";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProductDetail(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const [id = undefined] = params.slug;

  // Logica para filtrar el producto detail
  if (!id) {
    return redirect(Routes.not_found);
  }

  const product = await getProductById(id);

  // const product = productsSample.find((product) => product.id === Number(id));

  if (!product) {
    return redirect(Routes.not_found);
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 bg-primary_blue-100">
        <div className="flex flex-col max-w-4xl mx-auto overflow-hidden transition-transform duration-300 transform border rounded-lg shadow-2xl bg-secondary_yellow-500 border-primary_blue-300 md:flex-row hover:scale-105">
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-64 rounded-t-lg shadow-md md:h-full md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          <div className="flex-grow p-6 md:p-8">
            <h1 className="mb-4 text-3xl font-extrabold text-center md:text-4xl text-light_black-500 md:text-left">
              Detalle del Producto
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold md:text-3xl text-light_black-500">
                {product.name}
              </h2>
              <p className="text-base leading-relaxed text-light_black-400 md:text-lg">
                {product.description}
              </p>
              <p className="text-xl font-semibold md:text-2xl text-light_black-500">
                Precio:{" "}
                <span className="font-bold text-light_black-500">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <p className="text-xl font-semibold md:text-2xl text-light_black-500">
                Stock:{" "}
                <span className="font-bold text-light_black-500">
                  {product.stock > 0 ? product.stock : "Agotado"}
                </span>
              </p>
              <div className="flex justify-center mt-auto">
                <Button
                  variant="default"
                  label="Agregar al Carrito"
                  className="px-12 py-3 text-secondary_yellow-500"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

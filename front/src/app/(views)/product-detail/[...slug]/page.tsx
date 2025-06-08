import Button from "@/components/ui/Button";
import { productsSample } from "@/helpers/products";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProductDetail(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const [id = undefined, ...slug] = params.slug;

  // Logica para filtrar el producto detail

  const product = productsSample.find((product) => product.id === Number(id));

  if (!product) {
    return redirect("/not-found");
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4 bg-primary_blue-100">
        <div
          className="
        max-w-4xl mx-auto         
        bg-secondary_yellow-500   
        rounded-lg                
        shadow-2xl                
        border border-primary_blue-300 
        overflow-hidden           
        flex                     
        flex-col md:flex-row      
        transform hover:scale-105 transition-transform duration-300 
      "
        >
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none shadow-md"
            />
          </div>

          <div className="p-6 md:p-8 flex-grow">
            <h1 className="text-3xl md:text-4xl font-extrabold text-light_black-500 mb-4 text-center md:text-left">
              Detalle del Producto
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-light_black-500">
                {product.name}
              </h2>
              <p className="text-light_black-400 leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
              <p className="text-xl md:text-2xl font-semibold text-light_black-500">
                Precio:{" "}
                <span className="font-bold text-light_black-500">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <p className="text-xl md:text-2xl font-semibold text-light_black-500">
                Stock:{" "}
                <span className="font-bold text-light_black-500">
                  {product.stock > 0 ? product.stock : "Agotado"}
                </span>
              </p>
              <div className="mt-auto flex justify-center">
                <Button
                  variant="default"
                  label="Agregar al Carrito"
                  className="py-3 px-12 text-secondary_yellow-500"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

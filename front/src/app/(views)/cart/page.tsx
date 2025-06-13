import { productsSample } from "@/helpers/products";
import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CartPage = () => {
  const showCartItems = true;

  const cartItems = productsSample;

  const calculateTotal = (items: IProduct[]) => {
    return items.reduce(
      (total: number, item: IProduct) => total + item.price,
      0
    );
  };

  return (
    <>
      <Container>
        <div className="max-w-6xl p-4 mx-auto mt-16 border rounded-lg shadow-2xl md:p-8 animate-bg-color-change">
          <h1 className="mb-8 text-4xl font-extrabold text-center md:text-5xl text-light_black-500">
            Carrito de Compras
          </h1>

          <div className="p-6 mb-10 border rounded-lg shadow-inner bg-secondary_yellow-300 border-primary_blue-200">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-primary_blue-500">
              Productos en tu Carrito:
            </h2>
            {showCartItems ? (
              <div className="space-y-6">
                {cartItems.map((product) => (
                  <div
                    key={product.id}
                    className="
                    flex flex-col md:flex-row items-center /* Flex para horizontal en MD */
                    bg-secondary_yellow-400 p-4 rounded-md shadow-md
                    border border-primary_blue-200
                  "
                  >
                    <div className="relative flex-shrink-0 w-32 h-32 mr-4 overflow-hidden rounded-md shadow-sm md:w-24 md:h-24">
                      <Image
                        fill
                        src={
                          product.image ||
                          "/docs/images/products/apple-watch.png"
                        }
                        alt={product.name || "Imagen del Producto"}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow mt-4 text-center md:text-left md:mt-0">
                      <h3 className="mb-1 text-xl font-semibold md:text-2xl text-primary_blue-500">
                        {product.name}
                      </h3>
                      <p className="mb-1 text-base text-primary_blue-400">
                        <strong>Precio:</strong>{" "}
                        <span className="font-bold text-primary_blue-800">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                      <p className="text-sm italic text-primary_blue-400">
                        <strong>Descripción:</strong>{" "}
                        {product.description.substring(0, 70)}
                        {product.description.length > 70 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="py-4 text-lg text-center text-primary_blue-400">
                Parece que tu carrito está vacío. ¡Explora nuestros productos!
              </p>
            )}
          </div>
          
          <div className="p-6 border rounded-lg shadow-inner bg-secondary_yellow-400 border-primary_blue-200">
            <h2 className="mb-6 text-2xl font-bold border-b-2 border-primary_blue-100 md:text-3xl text-light_black-500">
              Resumen del Pedido
            </h2>
            <p className="mt-10 mb-4 text-2xl font-semibold text-center md:text-3xl text-primary_blue-800 md:text-center">
              Total:
              <span className="font-extrabold text-accent_blue-500">
                ${calculateTotal(cartItems).toFixed(2)}
              </span>
            </p>
            <div className="flex justify-end">
              <Button
                variant="light"
                label="Completar pedido"
                className="px-10 py-4"
              ></Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;

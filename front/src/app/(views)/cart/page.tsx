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
        <div className="max-w-6xl mx-auto p-4 md:p-8 bg-secondary_yellow-500 rounded-lg shadow-2xl border border-primary_blue-300 mt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-light_black-500 mb-8 text-center">
            Carrito de Compras
          </h1>

          <div className="mb-10 p-6 bg-secondary_yellow-300 rounded-lg shadow-inner border border-primary_blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-primary_blue-500 mb-6">
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
                    <div className="relative w-32 h-32 md:w-24 md:h-24 flex-shrink-0 mr-4 rounded-md overflow-hidden shadow-sm">
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
                    <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
                      <h3 className="text-xl md:text-2xl font-semibold text-primary_blue-500 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-primary_blue-400 text-base mb-1">
                        <strong>Precio:</strong>{" "}
                        <span className="font-bold text-primary_blue-800">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                      <p className="text-primary_blue-400 text-sm italic">
                        <strong>Descripción:</strong>{" "}
                        {product.description.substring(0, 70)}
                        {product.description.length > 70 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-primary_blue-400 text-center py-4">
                Parece que tu carrito está vacío. ¡Explora nuestros productos!
              </p>
            )}
          </div>

          <div className="p-6 bg-secondary_yellow-300 rounded-lg shadow-inner border border-primary_blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-light_black-500 mb-6">
              Resumen del Pedido
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-primary_blue-800 mb-8 text-center md:text-left">
              Total:{" "}
              <span className="font-extrabold text-accent_blue-500">
                ${calculateTotal(cartItems).toFixed(2)}
              </span>
            </p>
            <div className="flex justify-center">
              <Button
                variant="default"
                label="Completar pedido"
                className="py-4 px-10 "
              ></Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;

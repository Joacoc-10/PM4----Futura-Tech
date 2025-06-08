import { Profile, ProfileOrders } from "@/helpers/ProfileRes";
import React from "react";

const ProfilePage = () => {
  const user = Profile.user;
  const orders = ProfileOrders;

  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4 bg-primary_blue-100">
        <div className=" max-w-4xl mx-auto bg-light_blue-100 rounded-lg shadow-2xl border border-light_blue-30 p-6 md:p-8 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary_blue-700 mb-8 text-center">
            Perfil de Usuario
          </h1>

          <div className="mb-10 p-6 bg-light_blue-200 rounded-lg shadow-inner border border-light_blue-300">
            <h3 className="text-2xl md:text-3xl font-bold text-primary_blue-500 mb-6 border-b pb-3 border-light_blue-400">
              Información del Usuario
            </h3>
            <div className="space-y-3 text-lg text-primary_blue-400">
              <p>
                <strong className="text-accent_blue-500 font-semibold">
                  Nombre:
                </strong>{" "}
                {user.name}
              </p>
              <p>
                <strong className="text-accent_blue-500 font-semibold">
                  Email:
                </strong>{" "}
                {user.email}
              </p>
              <p>
                <strong className="text-accent_blue-500 font-semibold">
                  Dirección:
                </strong>{" "}
                {user.address}
              </p>
              <p>
                <strong className="text-accent_blue-500 font-semibold">
                  Teléfono:
                </strong>{" "}
                {user.phone}
              </p>
              <p>
                <strong className="text-accent_blue-500 font-semibold">
                  Rol:
                </strong>{" "}
                {user.role}
              </p>
            </div>
          </div>

          {/* Sección de Órdenes Realizadas */}
          <div className="p-6 bg-light_blue-200 rounded-lg shadow-inner border border-light_blue-300">
            <h2 className="text-2xl md:text-3xl font-bold text-primary_blue-500 mb-6 border-b pb-3 border-light_blue-400">
              Órdenes Realizadas
            </h2>
            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="
                  bg-light_blue-300 p-4 rounded-md shadow-sm
                  border border-light_blue-400
                "
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-primary_blue-600 mb-2">
                      Orden #{order.id}
                    </h3>
                    <p className="text-primary_blue-500 text-base mb-1">
                      <strong className="text-accent_blue-500">Estado:</strong>{" "}
                      <span>{order.status}</span>
                    </p>
                    <p className="text-primary_blue-500 text-base mb-2">
                      <strong className="text-accent_blue-500">Fecha:</strong>{" "}
                      <span>{new Date(order.date).toLocaleDateString()}</span>
                    </p>
                    <p className="text-accent_blue-500 text-base mb-1 font-semibold">
                      Productos:
                    </p>
                    <ul className="list-disc list-inside text-primary_blue-400 pl-4 space-y-1">
                      {order.products.map((product) => (
                        <li key={product.id}>
                          <span className="font-semibold">{product.name}</span>{" "}
                          (x1) -{" "}
                          <span className="font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-bold text-primary_blue-700 mt-4 text-right">
                      Total: $
                      {order.products
                        .reduce((total, product) => total + product.price, 0)
                        .toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-primary_blue-400 text-center py-4">
                Aún no hay órdenes registradas.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

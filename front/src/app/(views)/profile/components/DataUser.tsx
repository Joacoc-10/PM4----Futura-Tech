"use client";
import { useAuthContext } from "@/context/authContext";
import usePrivate from "@/hooks/usePrivate";
import React from "react";

const DataUser = () => {
  const {isAuthReady} = usePrivate();
  const { user } = useAuthContext();

  if (!isAuthReady){
    return <p className="py-4 text-center"> Cargando... </p>
  }
  if (!user) {
    return <p className="py-4 text-center">Datos de usuario no disponibles.</p>
  }

  return (
    <>
      <p>
        <strong className="font-semibold text-accent_blue-500">Nombre:</strong>
        {user.name}
      </p>
      <p>
        <strong className="font-semibold text-accent_blue-500">Email:</strong>
        {user.email}
      </p>
      <p>
        <strong className="font-semibold text-accent_blue-500">
          Dirección:
        </strong>
        {user.address}
      </p>
      <p>
        <strong className="font-semibold text-accent_blue-500">
          Teléfono:
        </strong>
        {user.phone}
      </p>
      <p>
        <strong className="font-semibold text-accent_blue-500">Rol:</strong>
        {user.role}
      </p>
    </>
  );
};

export default DataUser;

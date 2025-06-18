"use client";
import { useAuthContext } from "@/context/authContext";
import usePrivate from "@/hooks/usePrivate";
import { Routes } from "@/routes";
import { useRouter } from "next/navigation";
import React from "react";

const DataUser = () => {
  usePrivate();
  const { user } = useAuthContext();
  const router = useRouter();

  if (!user) {
    router.push(Routes.home);
    return null;
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

"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { Routes } from "@/routes";
import { useAuthContext } from "@/context/authContext";

const AuthNav = () => {
  const {user, isAuth, resetUserData} = useAuthContext();
  console.log("user", user);
  
  const logout = () => {
    resetUserData();
    
    location.href = Routes.home;
  }

  if (isAuth){
    return(
      <div className="flex items-center justify-end space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <span className="self-center mr-4 text-extrabold text-[1.5em] text-secondary_yellow-500">{user?.name || "Nombre de Usuario"}</span>
        <Button label="Cerrar sesión" variant="light" onClick={logout} >
        </Button>
      </div>
    )
  }

  return( 
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link href={Routes.register}>
              <Button label="Registrarse">
              </Button>
            </Link>
            <Link href={Routes.login}>
              <Button label="Iniciar sesión">
              </Button>
            </Link>
          </div>
  )
}

export default AuthNav;
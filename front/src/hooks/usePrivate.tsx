"use client";
import { useAuthContext } from "@/context/authContext";
import { Routes } from "@/routes";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";

const usePrivate = () => {
  const { isAuth, isAuthReady } = useAuthContext();
  const router = useRouter();

  useEffect( () => {
    if (isAuthReady && isAuth === false) {
      router.push(Routes.home);
    }
  }, [isAuth, isAuthReady ,router] );
  
  return {isAuthReady};

}

export default usePrivate;
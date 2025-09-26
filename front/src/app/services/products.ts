/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";

// 1. Lectura de la Variable de Entorno
// La variable DEBE estar configurada en Vercel como: 
// https://pm4-futura-tech-production.up.railway.app/api
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Si la URL no está definida (debería estarlo ahora), lanzamos un error claro.
if (!API_URL) {
    throw new Error("❌ Error de Configuración: La variable NEXT_PUBLIC_API_URL es requerida.");
}

// 2. Inicialización de Axios
const axiosApiBack = axios.create({
  baseURL: API_URL,
});

export const getProducts = async () => {
  try {
    const res = await axiosApiBack.get("/products");
    
    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Invalid products data format", res.data);
      return [];
    }
    return res.data;

  } catch (error: any) {
    // Es normal que falle durante el build si el backend está inactivo.
    console.warn("Error fetching product list during build/prerender:", error?.message);
    // Devolvemos un array vacío para no detener el build, pero la página se renderizará sin productos.
    return []; 
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await axiosApiBack.get(`/products/${id}`);

    if (!res.data || typeof res.data !== "object") {
      console.warn("Invalid product data format", res.data);
      return null;
    }
    return res.data;

  } catch (error: any) {
    console.warn(`Error fetching product by ID (${id}):`, error?.message);
    return null;
  }
};


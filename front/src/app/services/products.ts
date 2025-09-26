// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";

// import axios from "axios";

// //llamado con Axios
// const axiosApiBack = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export const getProducts = async () => {
//   try {
//     // llamado con Fetch
//     // const res = await fetch("http://localhost:3003" + "/products");
//     // const products = await res.json();
//     // return products;

//     //Axios
//     const res = await axiosApiBack.get("/products");
//     if (!res.data || !Array.isArray(res.data)) {
//       console.warn("Invalid products data format", res.data);
//       return [];
//     }
//     return res.data;
//   } catch (error: any) {
//     console.warn("Error fetching product list", error?.message);
//     return [];
//   }
// };

// export const getProductById = async (id: string) => {
//   try {
//     const res = await axiosApiBack.get(`/products/${id}`);

//     if (!res.data || typeof res.data !== "object") {
//       console.warn("Invalid product data format", res.data);
//       return null;
//     }
//     return res.data;
//   } catch (error: any) {
//     console.warn(`Error fetching product by ID (${id}):`, error?.message);
//     return null;
//   }
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";

// 1. Lectura y Validación de la Variable de Entorno
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// --- VERCEL BUILD CHECK (TEMPORAL) ---
// Esta línea es CRÍTICA para ver el valor de la URL durante el proceso de compilación.
console.log("VERCEL BUILD CHECK: NEXT_PUBLIC_API_URL ->", API_URL); 

// Si la URL no está definida (lo que ocurre si la variable no está configurada en Vercel),
// forzamos un fallo de compilación con un mensaje específico.
if (!API_URL) {
    throw new Error("❌ BUILD CRASH: La variable NEXT_PUBLIC_API_URL NO está definida en Vercel.");
}
// ----------------------------------------

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
    console.warn("Error fetching product list", error?.message);
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
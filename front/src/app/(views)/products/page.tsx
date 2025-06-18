// 'use client';
// import React, { useEffect, useState } from "react";
// import ProductList from "../(home)/components/ProductList";
// import { productsSample } from "@/helpers/products";
// import { getProducts } from "@/app/services/products";


// const getData = async () => {
//   const products = await getProducts();
//   return{products}
// }

// const ProductsPage = async ({params}: { params: Promise<{category: string}>}) => {
//   const {products} = await getData();
//   const {category} = await params;

//   const[productsCategory, setProductsCategory] = useState<Partial<IProduct>[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

// useEffect(() => {
//   const fetchProductsByCategory = async () => {
//     setLoading(true);
//     try{
//       const filteredProducts = products.filter(
//         (product: Partial<IProduct>) => 
//           product.categoryId === Number(category)
//       )
//       setProductsCategory(filteredProducts)
//     } catch (error) {
//       console.error("Error fetching products by category:", error);
//     } finally{
//       setLoading(false);
//     }
//   }
//   fetchProductsByCategory();
// }, [category]);

//   return (
//     <div>
//       <h1>Categorias</h1>
//       <ProductList products={productsSample} />
//     </div>
//   );
// };

// export default ProductsPage;

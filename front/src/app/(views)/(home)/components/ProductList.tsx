import React, { FC } from "react";
import ProductCard from "./ProductCard";
import Container from "@/components/ui/Container";

interface ProductListProps {
  products: Partial<IProduct>[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-8">
          {products.map((p: Partial<IProduct>) => (
            <ProductCard {...p} key={p.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;

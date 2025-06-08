import Container from "@/components/ui/Container";
import Image from "next/image";
import ProductList from "./(home)/components/ProductList";
import { productsSample } from "@/helpers/products";

export default function Home() {
  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/garmin-fenix-e-cuerpo.webp?updatedAt=1749321850529"
          alt="hero"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <Container>
          <h2 className="text-[2em] font-bold my-4 text-light_black-500">
            Productos Destacados
          </h2>
          <ProductList products={productsSample} />
        </Container>
      </div>
    </>
  );
}

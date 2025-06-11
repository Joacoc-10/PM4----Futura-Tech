import Container from "@/components/ui/Container";
// import Image from "next/image";
import ProductList from "./(home)/components/ProductList";
import { productsSample } from "@/helpers/products";
import HomeCarrucel from "./(home)/page";

export default function Home() {
  return (
    <>
      {/* <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/67733-1-D-US-ONLY.jpg?updatedAt=1749415931007"
          alt="hero"
          fill
          className="object-cover"
        />
      </div> */}
      <HomeCarrucel />
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

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/garmin-fenix-e-cuerpo.webp?updatedAt=1749321850529"
          alt="hero"
          fill
          className="object-cover "
        />
      </div>
    </>
  );
}

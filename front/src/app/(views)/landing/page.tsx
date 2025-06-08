import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary_blue-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="
        max-w-5xl w-full mx-auto /* Ancho máximo y centrado automático */
        bg-secondary_yellow-500 /* Fondo de la tarjeta: tu amarillo clarito */
        rounded-2xl shadow-3xl overflow-hidden /* Bordes redondeados y sombra profunda */
        md:flex /* Activa flexbox para la disposición horizontal en pantallas medianas y grandes */
        transform transition-transform duration-500 hover:scale-[1.02] /* Efecto sutil al pasar el ratón */
        border border-primary_blue-300 /* Borde sutil para definir la tarjeta */
      "
      >
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-secondary_yellow-200 to-secondary_yellow-600">
          <Image
            src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Iphone16pro.jpg?updatedAt=1749413376932"
            alt="iPhone 16 Pro Max"
            width={500}
            height={500}
            className="rounded-xl shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-out h-[700px]"
            priority
          />
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary_blue-700 mb-4 leading-tight">
            Descubre el Poder del <br className="hidden sm:inline" />
            <span className="text-accent_blue-500">iPhone 16 Pro Max</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary_blue-500 mb-6 max-w-md mx-auto md:mx-0">
            La innovación se une a la potencia. Experimenta una velocidad
            inigualable, una cámara de otro nivel y un diseño que redefine la
            elegancia.
          </p>

          <ul className="text-primary_blue-600 space-y-3 mb-8 text-left max-w-sm mx-auto md:mx-0">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-accent_blue-500 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Chip A18 Bionic:{" "}
              <span className="font-semibold">
                Rendimiento sin precedentes.
              </span>
            </li>

            <br />

            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-accent_blue-500 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Sistema de Cámara Pro 50MP:{" "}
              <span className="font-semibold">
                Fotos y videos impresionantes.
              </span>
            </li>

            <br />

            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-accent_blue-500 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Pantalla ProMotion XDR:{" "}
              <span className="font-semibold">
                Claridad y fluidez sin igual.
              </span>
            </li>
          </ul>

          <Link href="/cart">
            <button
              className="
              w-full md:w-auto px-10 py-4 /* Padding y ancho responsivo */
              bg-accent_blue-500 hover:bg-accent_blue-600 /* Color de fondo del botón, usando tu accent_blue */
              text-white font-extrabold text-xl /* Color y grosor del texto del botón */
              rounded-full shadow-lg /* Bordes redondeados y sombra */
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 /* Efecto de hover */
              focus:outline-none focus:ring-4 focus:ring-accent_blue-300 /* Estilo de foco para accesibilidad */
            "
            >
              ¡Cómprarlo Ahora y Vive la Experiencia!
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-12 text-sm text-primary_blue-500 opacity-80 text-center">
        <p>Oferta por tiempo limitado. Consulta términos y condiciones.</p>
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa de Tecnología. Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;

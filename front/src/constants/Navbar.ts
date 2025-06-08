import { NavbarItemProps } from "@/components/ui/Navbar/NavbarItem";
import { Routes } from "@/routes";

export const NavbarLinks: NavbarItemProps[] = [
  {
    label: "Inicio",
    href: Routes.home,
  },
  {
    label: "Productos",
    href: Routes.product_detail,
  },
  {
    label: "Contacto",
    href: Routes.contact,
  },
  {
    label: "Carrito",
    href: Routes.cart,
  },
  {
    label: "Perfil",
    href: Routes.profile,
  },
  {
    label: "Landing",
    href: Routes.landing,
  },
];

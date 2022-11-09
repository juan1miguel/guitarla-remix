import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import ListadoGuitarra from "~/components/listado-guitarras";
import styles from "../styles/guitarras.css";
export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccionde Guitrras",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}
function Tienda() {
  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoGuitarra guitarras={guitarras} />
    </main>
  );
}

export default Tienda;

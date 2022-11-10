import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarra from "~/components/listado-guitarras";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccionde Guitrras",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}
function Tienda() {
  const guitarras = useLoaderData();

  return <ListadoGuitarra guitarras={guitarras} />;
}

export default Tienda;

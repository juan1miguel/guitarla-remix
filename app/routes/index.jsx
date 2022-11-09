import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import ListadoGuitarra from "~/components/listado-guitarras";
import stylesGuitarras from '~/styles/guitarras.css';
export function meta() {}
export function links() {

  return [

    {
      rel: 'stylesheet',
      href:stylesGuitarras
    }
  ]
}
export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return { guitarras: guitarras.data, posts: posts.data };
}
function Index() {
  const { guitarras, posts } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarra guitarras={guitarras} />
      </main>
    </>
  );
}

export default Index;

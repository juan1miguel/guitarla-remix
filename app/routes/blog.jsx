import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPost from "~/components/listado-posts";
import style from "~/styles/blog.css";
export function meta (){
  return {
    title: 'GuitarLA - nuestro Blog',
    description: 'GuitarLA, Blog de musica y venta de guitarras'
  }
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}
export async function loader() {
  const posts = await getPosts();
  
  return posts.data;
}
function Blog() {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
     <ListadoPost posts={posts} />
    </main>
  );
}

export default Blog;

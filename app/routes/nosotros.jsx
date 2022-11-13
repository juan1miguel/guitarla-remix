import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";
export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}
function Nosotros() {
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Morbi eget quam sit amet massa lobortis molestie in eget nisl. Morbi
            ultrices ex sed sapien posuere, volutpat egestas dui sollicitudin.
            Donec sagittis iaculis erat, vel dapibus arcu vehicula quis. Integer
            mattis elit nec tempus fringilla. Nulla tempor porta vulputate. Nam
            malesuada, risus ut accumsan hendrerit, mauris dolor viverra arcu,
            at dictum orci eros in est. Sed ultrices elit non sapien interdum,
            ut vehicula leo venenatis. Sed efficitur elit a arcu laoreet
            dignissim. Maecenas vehicula dolor non euismod dictum.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;

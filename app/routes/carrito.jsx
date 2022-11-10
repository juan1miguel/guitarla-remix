import styles from "~/styles/carrito.css";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export function meta(){
    return{
        title:'GuitarLA - Carrito de Compras',
        description:'Venta de guitarras, musica,blog, tienda'
    }
}
function Carrito() {
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
            <h2>Articulos</h2>
        </div>
      <aside className="resumen">
        <h3>Resumen de Pedido</h3>
        <p>Total a Pagar</p>
      </aside>

      </div>
    </main>
  );
}

export default Carrito;

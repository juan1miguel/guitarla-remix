import {useOutletContext} from '@remix-run/react'
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
  const {carrito}=useOutletContext()
  
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
            <h2>Articulos</h2>
            {carrito.length=== 0 ? 'Carrito Vacio' : (
              carrito.map(e=>(
                <div key={e.id} className='producto'>
                  <div>
                    <img src={e.imagen} alt={`imagen del producto ${e.nombre}`} />
                  </div> 

                  <div>
                    <p className='nombre'>{e.nombre} </p>
                    <p>Cantidad: {e.cantidad} </p>
                    <p className='precio'>$ <span>{e.precio} </span> </p>
                    <p className='subtotal'>Subotal:$ <span> {e.cantidad * e.precio}</span> </p>
                  </div>
                </div>
              ))
            )}
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

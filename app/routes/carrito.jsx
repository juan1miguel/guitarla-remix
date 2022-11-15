import {useEffect,useState} from 'react'
import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/carrito.css";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, musica,blog, tienda",
  };
}
function Carrito() {
  const [total,setTotal]=useState(0)
  const { carrito,actualizarCantidad,eliminarGuitarra } = useOutletContext();
  useEffect(()=>{
    const calculoTotal= carrito.reduce((total,producto)=>total + (producto.cantidad * producto.precio),0)
    setTotal(calculoTotal)
  },[carrito])
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((e) => (
                <div key={e.id} className="producto">
                  <div>
                    <img
                      src={e.imagen}
                      alt={`imagen del producto ${e.nombre}`}
                    />
                  </div>

                  <div>
                    <p className="nombre">{e.nombre} </p>
                    <p>Cantidad:</p>
                    <select value={e.cantidad} className='select' onChange={event=> actualizarCantidad({
                      cantidad: event.target.value,
                      id: e.id
                    },console.log(e))} >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="precio">
                      $ <span>{e.precio} </span>{" "}
                    </p>
                    <p className="subtotal">
                      Subotal:$ <span> {e.cantidad * e.precio}</span>{" "}
                    </p>
                  </div>
                  <button type='button' className='btn_eliminar' onClick={()=>eliminarGuitarra(e.id)}>X</button>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3>Resumen de Pedido</h3>
          <p>Total a Pagar: {total} </p>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;

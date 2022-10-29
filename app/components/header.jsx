import { Link } from "@remix-run/react";
import Logo from '../../public/img/logo.svg';
function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/'>

            <img  className="logo" src={Logo} alt="imagen de logo" />
        </Link>
        <nav className="navegacion">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/tienda">Tiend</Link>
          <Link to="/blog">Blog</Link>


        </nav>
      </div>
    </header>
  );
}

export default Header;

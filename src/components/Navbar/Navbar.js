import "./Navbar1.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="imglogo" src={"./images/logo_tv_sale.png"} />
      <Link to="/category/HD">Definicion HD</Link>
      <Link to="/category/FULL HD">Definicion HD</Link>
      <Link to="/category/FHD 4K">Definicion 4K</Link>
      <Link to="/" className="EstiloLink">Lista</Link>
      <Link to="/detail" className="EstiloLink">Detalle</Link>
      <Link to="/">
        <button className="boton1 text-danger">
          Home
          </button>
      </Link>
      <button className="boton2"> About</button>
      <button className="boton3"> Faq</button>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

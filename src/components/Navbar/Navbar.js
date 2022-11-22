import "./Navbar1.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navbar">
     <img  className="imglogo" src={"./images/logo_tv_sale.png"} />
      <button className="boton1"> Home</button>
      <button className="boton2"> About</button>
      <button className="boton3" > Faq</button>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

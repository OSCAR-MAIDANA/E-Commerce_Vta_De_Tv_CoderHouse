import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";

const Form = () => {
  /* const [user, setUser] = useState({}); */
  const { user, setUser } = useContext(cartContext);

  const updateUser = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={updateUser}
          placeholder="Nombre"
          name="name"
          type="text"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Apellido"
          name="surname"
          type="text"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Telefono"
          name="phone"
          type="number"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Email"
          name="email"
          type="text"
          className="text-black p-2"
        />
        {/*  onChange={(e) => setInput(e.target.value)} */}
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};
export default Form;

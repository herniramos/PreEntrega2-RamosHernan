import "./Navbar.css";
import CartWidgets from "../CartWidgets/CartWidgets";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="productos">
        <ul>
          <li>
            <NavLink className={(estatus) => estatus.isActive ? 'activo' : 'inactivo'} to="/">
            Todos los productos
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/remeras">
            TOP
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/pantalones">
            DOWN
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')} to="/category/others">
            OTROS
            </NavLink>
          </li>
          <li>
            <CartWidgets />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

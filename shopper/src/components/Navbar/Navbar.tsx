import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const getTotalCartItems: number | undefined =
    useContext(ShopContext)?.getTotalCartItems();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo}></img>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop{menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men{menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="womens">
            Women{menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="kids">
            Kids{menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
        <Link to="cart">
          <img src={cart_icon} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems as ReactNode}</div>
      </div>
    </div>
  );
};

export default Navbar;

import style from "./Header.module.css";

import { Link } from "react-router-dom";

import Menu from "../../assets/Menu.svg";
import Cart from "../../assets/Cart.svg";
import Profile from "../../assets/Profile.svg";

const Header = () => {
  return (
    <header>
      <div className={style.logo_container}>
    <img src={Menu} alt="menu-icon" />
    <Link to="/Home"><h3 className={style.logo}>BUYRITE</h3></Link>
    
    <input type="text" placeholder="search over 50 brands and 2000 products of your choice..." />
    </div>
    <div className={style.profile_cart}>
      <img src={Profile} alt="profile-icon" />
      <Link to="/Cartpage"><img src={Cart} alt="cart" /></Link>
    </div>

    </header>
  )
};

export default Header;
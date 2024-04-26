import React from "react";
import "./Header.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import {auth} from "../firebase.js"

const Header = () => {
   const [{basket,user},dispatch]=useStateValue();

   const handleAuthentication = () => {
    if(user)
    {
      auth.signOut();
    }
   }

  return (
    <div className="header">
      <Link to="/" >
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>
      </Link>

      <div className="location">
        <p> <LocationOnOutlinedIcon className="locationIcon"></LocationOnOutlinedIcon>
        <span className="header__optionLineOne">Delivering to Tiruppur </span></p>
        <span className="header__optionLineTwo" style={{marginLeft:"20px"}}>Update location</span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Amazon.in"></input>
        <SearchIcon className="searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">{user? 'Sign Out':'SignIn'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

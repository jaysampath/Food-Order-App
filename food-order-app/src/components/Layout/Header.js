import React from "react";
import "./Header.css";
import mainImage from '../../assets/mealsImage.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Food Order</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
          <img src={mainImage} alt="mainImage"/>
      </div>
    </React.Fragment>
  );
};

export default Header;

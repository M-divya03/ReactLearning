import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName,setBtnName]= useState("logIn")

    return (
        <div className="header">
           <div className="logo">
            <img 
                src= {LOGO_URL}
                alt="logo"
            />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName === "logIn" ? setBtnName("logOut") :
                    setBtnName("logIn");
                    }}>{btnName}</button>
            </ul>
            </div>
        </div>
    );
};

export default Header;
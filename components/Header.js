import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName,setBtnName]= useState("logIn");

     useEffect(()=>{
        console.log("use effect in headers called");
    },[btnName]);

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
                <li> <Link to = "/">Home</Link> </li>
                <li> <Link to = "/About"> About Us </Link> </li>
                <li> <Link to = "/Contact"> Contact Us </Link> </li>
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
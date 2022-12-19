import React from "react";
import logo from "../photos/logo.png";


export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo}></img>
        </nav>
    )
}
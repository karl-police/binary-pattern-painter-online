import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (<>
        <header>
            <h1 style={{textAlign: "center"}}><Link to="/">Binary Pattern Editor</Link></h1>
        </header>
    </>)
}


export default Header;
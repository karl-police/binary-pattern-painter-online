import React from "react";
import PUBLIC_URL from "../modules/public_url.js";

function Header() {
    return (<>
        <header>
            <h1 style={{textAlign: "center"}}><a href={PUBLIC_URL.url} className="no-link-style">Binary Pattern Editor</a></h1>
        </header>
    </>)
}


export default Header;
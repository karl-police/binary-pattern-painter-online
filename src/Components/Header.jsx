import React from "react";
import PUBLIC_URL from "../modules/public_url.mjs";

function Header() {
    return (<>
        <header>
            <h1 style={{textAlign: "center"}}><a href={{PUBLIC_URL}} className="no-link-style">Binary Pattern Editor</a></h1>
        </header>
    </>)
}


export default Header;
import React from "react";
import PAGE_CONFIG from "../js/modules/page_config.js";

function Header() {
    return (<>
        <header>
            <h1 style={{textAlign: "center"}}><a href={PAGE_CONFIG.home_url} className="no-link-style">Binary Pattern Editor</a></h1>
        </header>
    </>)
}


export default Header;
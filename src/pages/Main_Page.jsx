import React from "react";
import { Link } from "react-router-dom";

function Main_Page() {
    return (<>
        <div>
            <div>
                <h2 id="about">About</h2>
                <p>
                    This Website provides some tools to create data in shape of binary matrices and export them as
                    JSON Array tables and or other.
                </p>
                <p>
                    It probably was a mistake to create this in React for gh-pages. I can only use HashRouting
                    which destroys anchor links.
                </p>
            </div>
            <div>
                <h2>Links</h2>
                <ul>
                    <li><Link to="/binary-pattern-editor">Binary Pattern Editor</Link></li>
                </ul>
            </div>
        </div>
   </>)
}

export default Main_Page;
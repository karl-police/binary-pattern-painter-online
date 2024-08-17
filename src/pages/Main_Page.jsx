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
            </div>
            <div>
                <h2>Links</h2>
                <ul>
                    <li><Link to="/binary-pattern-editor">binary-pattern-editor</Link></li>
                </ul>
            </div>
        </div>
   </>)
}

export default Main_Page;
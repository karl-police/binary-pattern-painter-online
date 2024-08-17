import React from "react";

import Header from "../Components/Header";

function Main_Page() {
    return (<>
        <div>
            <div>
                <h2>About</h2>
                <p>
                    This Website provides some tools to create data in shape of binary matrices and export them as
                    JSON Array tables and or other.
                </p>
            </div>
            <div>
                <h2>Links</h2>
                <ul>
                    <li><a href="./binary-pattern-editor">binary-pattern-editor</a></li>
                </ul>
            </div>
        </div>
   </>)
}

export default Main_Page;
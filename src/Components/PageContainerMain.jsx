import React from "react";


function PageContainerMain({ children }) {
    return (<>
        <div className="mainContainer">
            {children}
        </div>
    </>)
}


export default PageContainerMain;
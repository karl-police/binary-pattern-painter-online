import React from "react";
import { Helmet } from "react-helmet";

import test from "../js/test";

function BinaryPatternEditorPage() {
    return (<>
        <Helmet>
            <script src="./src/js/test.js"></script>
        </Helmet>
        
        <div>
            test
        </div>
   </>)
}

export default BinaryPatternEditorPage;
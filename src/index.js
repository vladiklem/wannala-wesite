import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
// import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

import "./index.scss";

// const tagManagerArgs = {
//     gtmId: "GTM-NVXXWWW",
// };

// TagManager.initialize(tagManagerArgs);

//Google Analytics init

ReactGA.initialize("UA-181455329-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

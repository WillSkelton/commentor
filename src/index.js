import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { colors } from "./services";

document.getElementsByTagName("html")[0].style.height = "100%";
document.getElementsByTagName("html")[0].style.width = "100%";
document.getElementsByTagName("html")[0].style.overflow = "hidden";
document.getElementById("root").style.height = "100%";
document.getElementById("root").style.width = "100%";

document.getElementsByTagName("body")[0].style.height = "100%";
document.getElementsByTagName("body")[0].style.width = "100%";
ReactDOM.render(<App />, document.getElementById("root"));

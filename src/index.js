import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStoreProductsStore from "./hooks-store/product-store";

import "./index.css";
import App from "./App";

configureStoreProductsStore();

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

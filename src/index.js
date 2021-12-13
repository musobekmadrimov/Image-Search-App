import React from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);

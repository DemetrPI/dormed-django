import React from "react";
import ReactDOM from "react-dom/client";
import "../static/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import i18n from "./components/i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <React.Suspense fallback="Loading...">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Suspense>
    </I18nextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CommentContextProvider } from "./context/commentContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CommentContextProvider>
      <App />
    </CommentContextProvider>
  </React.StrictMode>
);

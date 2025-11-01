import "./styles/vars.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ClerkProvider, QueryClientProvider } from "./app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider>
      <QueryClientProvider>
        <App />
      </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>
);

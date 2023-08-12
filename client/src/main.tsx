import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./style/globals.css"
import ToastProvider from "./components/toast.tsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastProvider />
    </BrowserRouter>
  </React.StrictMode>
)

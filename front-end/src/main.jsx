// import "tailwindcss"
import App from "./App"
import ReactDOM from 'react-dom'
import React from "react"
import { createTheme } from "@mui/system"



const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )


// import "tailwindcss"
import App from "./App"
import ReactDOM from 'react-dom/client'
import React from "react"
import { createTheme } from "@mui/system"
import "./index.css"
import {Provider} from "react-redux"
import { store } from "./components/App/store"

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </Provider>
  )


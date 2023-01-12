import React from "react"
import ReactDOM from "react-dom/client"
import "./index.sass"
import App from "./App"
import {ThemeProvider} from "@mui/material"
import {theme} from "./theme/themeDefault"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.sass"
import App from "./App"
import {ThemeProvider} from "@mui/material"
import {theme} from "./theme/themeDefault"
import {QueryClient, QueryClientProvider} from "react-query"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

const queryClient = new QueryClient()


root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
)

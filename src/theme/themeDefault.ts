import toRem from "../helpers/toRem"
import {createTheme} from "@mui/material"

export const theme = createTheme({
	palette: {
		primary: {
			main: "rgb(34,34,34)",
			light: "rgba(255, 255, 255, 0.6)",
			dark: "rgba(255, 255, 255, 0.05)",
			contrastText: "rgb(244, 244, 244)",
		},
		success: {
			main: "rgb(16, 194, 0)"
		},
		warning: {
			main: "rgb(54, 110, 255)"
		},
		info: {
			main:  "rgb(255, 0, 0)",
			second: "rgb(54, 110, 255)",
			third: "rgb(255, 235, 51)",
		}

	},
	typography: {
		h1: {
			fontFamily: "Actor",
			fontSize: toRem(36),
			fontWeight: 600,
		},
		body1: {
			fontFamily: "Actor",
			fontSize: toRem(24),
		}
	}
})

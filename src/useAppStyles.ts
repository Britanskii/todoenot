import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "./helpers/toRem"

export const useAppStyles = makeStyles(({palette}: Theme) => (
	{
		app: {
			paddingTop: toRem(25),
			backgroundColor: palette.primary.backgroundColor,
			minHeight: "100vh"
		}
	}
))

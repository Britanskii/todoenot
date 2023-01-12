import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useHeaderStyles = makeStyles(({palette}: Theme) => (
	{
		header: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between"
		}
	}
))

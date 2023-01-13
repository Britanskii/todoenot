import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useHeaderStyles = makeStyles(({palette}: Theme) => (
	{
		header: {
			padding: `0 ${toRem(33)}`,
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between"
		}
	}
))

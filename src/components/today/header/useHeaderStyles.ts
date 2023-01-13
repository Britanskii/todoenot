import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../../helpers/toRem"

export const useHeaderStyles = makeStyles(({palette}: Theme) => (
	{
		header: {
			marginTop: toRem(20),
			display: "flex",
			padding: `0 ${toRem(16)}`,
		},
		checkbox: {
			marginRight: toRem(10)
		},
		active: {
			color: palette.success.main
		}
	}
))

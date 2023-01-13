import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useLineStyles = makeStyles(({palette}: Theme) => (
	{
		line: {
			height: toRem(40),
			width: toRem(5),
			borderRadius: toRem(3)
		},
		main: {
			backgroundColor: palette.info.main
		},
		first: {
			backgroundColor: palette.info.first
		},
		second: {
			backgroundColor: palette.info.second
		},
		third: {
			backgroundColor: palette.info.third
		}
	}
))

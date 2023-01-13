import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../../../helpers/toRem"

export const useCheckboxStyles = makeStyles(({palette}: Theme) => (
	{
		checkbox: {
			width: toRem(23),
			height: toRem(23)
		},
		background: {
			transition: ".2s all ease",
		},
		active: {
			fill: palette.success.main
		}
	}
))

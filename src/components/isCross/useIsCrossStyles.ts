import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useIsCrossStyles = makeStyles(({palette}: Theme) => (
	{
		cross: {
			position: "relative"
		},
		line: {
			top: toRem(13),
			position: "absolute",
			backgroundColor: palette.common.white,
			height: toRem(3),
			width: "0"
		}
	}
))

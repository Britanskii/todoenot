import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useArrowStyles = makeStyles(({palette}: Theme) => (
	{
		arrow: {
			width: toRem(21),
			height: toRem(21),
			marginRight: toRem(20)
		}
	}
))

import {Theme } from "@mui/material"
import {makeStyles} from "@mui/styles"
import toRem from "../../helpers/toRem"

export const useDropdownStyles = makeStyles(({palette}: Theme) => (
	{
		dropdown: {
			boxShadow: `${toRem(16)} ${toRem(16)} ${toRem(20)} ${palette.primary.shadow}, ${toRem(-8)} ${toRem(-8)} ${toRem(15)} ${palette.primary.dark}`,
			borderRadius: toRem(25)
		}
	}
))

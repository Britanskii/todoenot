import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"
import {makeStyles} from "@mui/styles"


export const useToDoStyles = makeStyles(({palette}: Theme) => (
	{
		todo: {
			margin: "auto auto",
			padding: `${toRem(15)} ${toRem(20)}`,
			borderRadius: toRem(30),
			height: toRem(844),
			width: toRem(390),
			backgroundColor: palette.primary.main,
			color: palette.primary.contrastText
		}
	}
))

import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"
import {makeStyles} from "@mui/styles"


export const useToDoStyles = makeStyles(({palette}: Theme) => (
	{
		todo: {
			margin: "0 auto",
			padding: `${toRem(17)} 0 0 0`,
			borderRadius: toRem(30),
			width: toRem(390),
			backgroundColor: palette.primary.main,
			color: palette.primary.contrastText,
		}
	}
))

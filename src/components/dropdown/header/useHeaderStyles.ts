import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../../helpers/toRem"

export const useHeaderStyles = makeStyles(({palette}: Theme) => (
	{
		header: {
			padding: `${toRem(20)} ${toRem(15)}`,
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			height: toRem(80),
			borderRadius: toRem(25),
		},
		open: {
			borderRadius: 0,
			borderTopLeftRadius: toRem(25),
			borderTopRightRadius: toRem(25),
		}
	}
))

import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useTodayStyles = makeStyles(({palette}: Theme) => (
	{
		today: {
			padding: `0 ${toRem(20)}`
		},
		body: {
			marginTop: toRem(15),
		}
	}
))

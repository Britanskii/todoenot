import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useCalendarStyles = makeStyles(({palette}: Theme) => (
	{
		calendar: {
			display: "flex",
			flexDirection: "column",
			gap: toRem(32),
			borderRadius: toRem(30),
			padding: `${toRem(32)} ${toRem(20)} 0 ${toRem(20)}`,
			maxHeight: toRem(515),
			overflowY: "scroll",
			"&::-webkit-scrollbar" : {
				width: 0
			}
		}
	}
))

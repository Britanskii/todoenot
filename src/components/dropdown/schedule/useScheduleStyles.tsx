import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../../helpers/toRem"

export const useScheduleStyles = makeStyles(({palette}: Theme) => (
	{
		body: {
			display: "flex",
			flexDirection: "column",
			gap: toRem(18),
			justifyContent: "space-between",
			borderRadius: toRem(25),
			height: "auto",
			width: "100%",
			padding: `${toRem(21)} ${toRem(15)}`,
			boxShadow: `${toRem(16)} ${toRem(16)} ${toRem(20)} ${palette.primary.shadow}, ${toRem(-8)} ${toRem(-8)} ${toRem(15)} ${palette.primary.dark}`,
		},
		dropbody: {
			padding: `0 ${toRem(15)} ${toRem(21)} ${toRem(15)} `,
			boxShadow: "none"
		},
		dropdown: {
			borderTopLeftRadius: "0",
			borderTopRightRadius: "0",
			height: "100%",
			overflow: "hidden",
			borderRadius: toRem(40),
			"& > *": {
				boxShadow: "none"
			}
		}
	}
))

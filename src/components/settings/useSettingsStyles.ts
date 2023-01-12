import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useSettingsStyles = makeStyles(({palette}: Theme) => (
	{
		settings: {
			position: "relative"
		},
		icon: {
			width: toRem(28.5),
			cursor: "pointer",
			pointerEvents: "inherit",
		},
		popup: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			borderRadius: toRem(20),
			opacity: 0,
			position: "absolute",
			right: "50%",
			transform: `translateY(${toRem(-18)})`,
			backgroundColor: palette.primary.main,
			boxShadow: `0 0 ${toRem(20)} ${palette.primary.dark}`,
			padding: `${toRem(15)} ${toRem(25)}`
		},
		text: {
			whiteSpace: "pre",
			marginRight: toRem(15)
		}
	}
))

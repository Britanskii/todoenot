import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useSwitchStyles = makeStyles(({palette}: Theme) => (
	{
		switch: {
			transition: ".3s all ease",
			position: "relative",
			boxShadow: `inset 0 0 ${toRem(10)} ${toRem(3)} rgba(0, 0, 0, 0.25)`,
			borderRadius: toRem(20),
			width: toRem(50),
			height: toRem(30),
			backgroundColor: palette.warning.main
		},
		active: {
			backgroundColor: palette.success.main
		},
		ball: {
			cursor: "pointer",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			transform: " translateY(-50%)",
			position: "absolute",
			width: toRem(25),
			height: toRem(25),
			backgroundColor: palette.common.white,
			borderRadius: "50%"
		},
		icon: {
			width: "50%"
		}
	}
))

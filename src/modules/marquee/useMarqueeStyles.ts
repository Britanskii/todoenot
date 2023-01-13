import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../helpers/toRem"

export const useMarqueeStyles = makeStyles(({palette}: Theme) => (
	{
		marquee: {
			overflow: "hidden",
			marginTop: toRem(25),
			display: "flex",
		},
		wrapper: {
			display: "flex",
			minWidth: "fit-content",
			animation: "$marquee 10s infinite linear"
		},
		line: {
			color: palette.common.white,
			opacity: .6,
			whiteSpace: "nowrap",
			width: "100%"
		},
		"@keyframes marquee": {
			"0%": {
				transform: "translateX(0%)"
			},
			"100%": {
				transform: "translateX(-50%)"
			}
		},
	}
))

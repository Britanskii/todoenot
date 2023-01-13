import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"
import toRem from "../../../helpers/toRem"

export const useInformationStyles = makeStyles(({palette}: Theme) => (
	{
		information: {
			width: "100%",
			justifyContent: "space-between",
			display: "flex",
			alignItems: "center"
		},
		main: {
			display: "flex",
			alignItems: "center"
		},
		title: {
			width: "fit-content"
		},
		subtitle: {
			marginTop: toRem(6),
			opacity: .6
		},
		line: {
			marginRight: toRem(11)
		},
		switch: {
			marginRight: toRem(10)
		}
	}
))

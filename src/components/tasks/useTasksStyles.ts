import {makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

export const useTasksStyles = makeStyles(({palette}: Theme) => (
	{
		tasks: {
			display: "flex",
			flexDirection: "column"
		}
	}
))

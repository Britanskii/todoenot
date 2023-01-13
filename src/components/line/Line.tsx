import {Box} from "@mui/material"
import {FC} from "react"
import {useLineStyles} from "./useLineStyles"
import {Color} from "../../interfaces/interfaces"

interface ILine {
	className?: string
	colorIndex?: number
	color?: Color
}

const Line: FC<ILine> = ({className = "", colorIndex = Color.main}) => {

	const colorEnum = colorIndex % ((Object.keys(Color).length / 2) - 1)

	const styles = useLineStyles()

	const getColorClass = (colorIndex: number) => {
		switch (colorIndex) {
		case Color.first: return styles.first
		case Color.second: return styles.second
		case Color.third: return styles.third
		case Color.main:
		default:
			return styles.main
		}
	}

	const colorClass = getColorClass(colorEnum)

	return <Box className={`${styles.line} ${colorClass} ${className}`}/>
}

export default Line

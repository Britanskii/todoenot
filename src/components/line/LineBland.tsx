import {FC} from "react"
import {useLineStyles} from "./useLineStyles"
import {Box} from "@mui/material"

interface ILineBland {
	className?: string
}

const LineBland: FC<ILineBland> = ({className = ""}) => {

	const styles = useLineStyles()

	return <Box className={`${styles.line} ${styles.main} ${className}`}/>
}

export default LineBland

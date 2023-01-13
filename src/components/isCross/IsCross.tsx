
import {Box} from "@mui/material"
import {FC, ReactNode} from "react"
import {motion} from "framer-motion"
import {useIsCrossStyles} from "./useIsCrossStyles"
import {crossVariants} from "../../animations/variants/variants"

interface IIsCross {
	isCross: boolean
	children: ReactNode | ReactNode[]
}

const IsCross: FC<IIsCross> = ({children, isCross}) => {

	const styles = useIsCrossStyles()

	return (
		<Box className={styles.cross}>
			{children}
			<motion.div variants={crossVariants} animate={isCross ? "animate" : "initial"} className={styles.line}/>
		</Box>
	)
}

export default IsCross

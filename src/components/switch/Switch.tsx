import {Box} from "@mui/material"
import {useSwitchStyles} from "./useSwitchStyles"
import {FC} from "react"
import {motion} from "framer-motion"
import Close from "../../resources/icons/Close"
import Right from "../../resources/icons/Right"
import {appearVariants} from "../../animations/variants/variants"

interface ISwitch {
	className?: string
	active: boolean,
	setActive: (bool: boolean) => void
}

const Switch: FC<ISwitch> = ({className = "", active, setActive}) => {

	const styles = useSwitchStyles()

	const onClick = () => {
		setActive(!active)
	}

	return (
		<Box onClick={onClick} className={`${styles.switch} ${active ? styles.active : ""} ${className}`}>
			<motion.div variants={appearVariants} initial={"disable"} animate={active ? "active" : "disable"} className={styles.ball}>
				{active ? <Right className={styles.icon}/> : <Close className={styles.icon}/>}
			</motion.div>
		</Box>
	)
}

export default Switch

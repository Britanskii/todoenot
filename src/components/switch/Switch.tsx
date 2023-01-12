import {Box} from "@mui/material"
import {useSwitchStyles} from "./useSwitchStyles"
import {useState} from "react"
import {motion} from "framer-motion"
import toRem from "../../helpers/toRem"

const variants = {
	disable: {
		x: toRem(3.5),
		y: toRem(2.5)
	},
	active:  {
		x: toRem(22.5),
		y: toRem(2.5)
	}
}

const Switch = () => {
	const [active, setActive] = useState(false)

	const styles = useSwitchStyles()

	const onClick = () => {
		setActive(active => active = !active)
	}

	return (
		<Box onClick={onClick} className={`${styles.switch} ${active ? styles.active : ""}`}>
			<motion.div variants={variants} initial={"disable"} animate={active ? "active" : "disable"} className={styles.ball}/>
		</Box>
	)
}

export default Switch

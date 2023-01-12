import {AnimatePresence, motion} from "framer-motion"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import settings from "../../resources/settings/settings.svg"
import {useSettingsStyles} from "./useSettingsStyles"
import {useState} from "react"
import {Box, Typography} from "@mui/material"
import Switch from "../switch/Switch"
import toRem from "../../helpers/toRem"

const variants = {
	rotateLeft: {rotate: -180},
	rotateRight: {rotate: 180}
}

const variantsPopup = {
	initial: {y: toRem(-10), opacity: 0},
	animate: {y: toRem(0), opacity: 1},
	exit: {opacity: 0}
}

const Settings = () => {
	const [active, setActive] = useState(false)
	const [animateSettings, setAnimateSettings] = useState("initial")

	const styles = useSettingsStyles()

	const onClick = () => {
		active ? setAnimateSettings("rotateLeft") : setAnimateSettings("rotateRight")
		setActive(animateSettings => animateSettings = !animateSettings)
	}

	return (
		<Box className={styles.settings}>
			<motion.img variants={variants} onClick={onClick} className={styles.icon} animate={animateSettings}   src={settings} alt="Settings"/>
			<AnimatePresence>
				{
					active &&
					<motion.div variants={variantsPopup} animate={"animate"} exit={"exit"} className={styles.popup}>
						<span className={styles.text} ><Typography>Turn on the ticker</Typography></span><Switch/>
					</motion.div>
				}
			</AnimatePresence>
		</Box>
	)
}

export default Settings

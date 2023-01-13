import {AnimatePresence, motion} from "framer-motion"
import {useSettingsStyles} from "./useSettingsStyles"
import {useContext, useEffect, useState} from "react"
import {Box, Typography} from "@mui/material"
import Switch from "../switch/Switch"
import {TickerContext} from "../../App"
import SettingsIcon from "../../resources/icons/Settings"
import {popupVariants, rotateVariants} from "../../animations/variants/variants"

const Settings = () => {
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState(false)
	const [animateSettings, setAnimateSettings] = useState("initial")

	const {isMarquee, setIsMarquee} = useContext(TickerContext)

	const styles = useSettingsStyles()

	const setLocalIsMarquee = (bool: boolean) => {
		localStorage.setItem("isMarquee", JSON.stringify(bool))
	}

	const onClick = () => {
		open ? setAnimateSettings("rotateLeft") : setAnimateSettings("rotateRight")
		setOpen(animateSettings => animateSettings = !animateSettings)
	}

	const setTickerActive = (bool: boolean) => {
		setIsMarquee(bool)
		setLocalIsMarquee(bool)
		setActive(bool)
	}

	useEffect(() => {
		const localIsMarquee = localStorage.getItem("isMarquee")
		if (localIsMarquee) {
			const isMarquee = JSON.parse(localIsMarquee) as boolean
			setTickerActive(isMarquee)
		} else {
			setTickerActive(isMarquee)
		}
	}, [])

	return (
		<Box className={styles.settings}>
			<SettingsIcon variants={rotateVariants} onClick={onClick} className={styles.icon} animate={animateSettings} />
			<AnimatePresence>
				{
					open &&
					<motion.div variants={popupVariants} animate={"animate"} exit={"exit"} className={styles.popup}>
						<span className={styles.text}><Typography>Turn on the ticker</Typography></span>
						<Switch active={active} setActive={setTickerActive}/>
					</motion.div>
				}
			</AnimatePresence>
		</Box>
	)
}

export default Settings

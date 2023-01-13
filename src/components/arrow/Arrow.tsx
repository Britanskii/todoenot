import {Dispatch, FC, SetStateAction} from "react"
import {useArrowStyles} from "./useArrowStyles"
import ArrowDown from "../../resources/icons/ArrowDown"
import {rotateArrowVariants} from "../../animations/variants/variants"

interface IArrow {
	isActive: boolean,
	setIsActive: Dispatch<SetStateAction<boolean>>
}

const Arrow: FC<IArrow> = ({isActive, setIsActive}) => {

	const styles = useArrowStyles()

	const onClick = () => {
		setIsActive(isActive => isActive = !isActive)
	}

	return <ArrowDown variants={rotateArrowVariants} animate={isActive ? "down" : "up"} onClick={onClick} className={styles.arrow}/>
}

export default Arrow

import {Dispatch, FC, SetStateAction} from "react"
import {useInformationStyles} from "./useInformationStyles"
import {Box, Typography} from "@mui/material"
import LineBland from "../../line/LineBland"
import Arrow from "../../arrow/Arrow"

interface IInformationBland {
	title: string,
	isOpen: boolean,
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const InformationBland: FC<IInformationBland> = ({title, isOpen, setIsOpen}) => {

	const styles = useInformationStyles()

	return (
		<Box className={styles.information}>
			<Box className={styles.main}>
				<LineBland className={styles.line}/>
				<Typography variant={"body1"}>{title}</Typography>
			</Box>
			<Arrow isActive={isOpen} setIsActive={setIsOpen}/>
		</Box>
	)
}

export default InformationBland

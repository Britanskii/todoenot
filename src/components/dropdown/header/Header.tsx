import {Box} from "@mui/material"
import {useHeaderStyles} from "./useHeaderStyles"
import InformationBland from "../information/InformationBland"
import {Dispatch, FC, SetStateAction} from "react"

interface IHeader {
	isOpen: boolean,
	setIsOpen: Dispatch<SetStateAction<boolean>>,
	title: string
}

const Header: FC<IHeader> = ({isOpen, setIsOpen, title}) => {

	const styles = useHeaderStyles()

	return (
		<Box className={`${styles.header} ${isOpen ? styles.open : ""}`}>
			<InformationBland isOpen={isOpen} setIsOpen={setIsOpen} title={title}/>
		</Box>
	)
}

export default Header

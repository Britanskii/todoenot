import {Box, Typography} from "@mui/material"
import {useHeaderStyles} from "./useHeaderStyles"
import {FC, useEffect, useState} from "react"
import Checkbox from "./checkbox/Checkbox"
import {ITask} from "../../../interfaces/interfaces"

interface IHeader {
	tasks: ITask[]
}

const Header: FC<IHeader> = ({tasks}) => {
	const [active, setActive] = useState(false)

	const styles = useHeaderStyles()

	useEffect(() => {
		const isAllSelected = tasks.filter(task => !task.success).length === 0

		setActive(isAllSelected)
	}, [tasks])

	return (
		<Box className={styles.header}>
			<Checkbox className={styles.checkbox} active={active}/>
			<Typography>Today Tasks</Typography>
		</Box>
	)
}

export default Header

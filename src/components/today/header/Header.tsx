import {Box, Typography} from "@mui/material"
import {useHeaderStyles} from "./useHeaderStyles"
import {FC, useEffect, useState} from "react"
import Checkbox from "./checkbox/Checkbox"
import {ITask} from "../../../interfaces/interfaces"

interface IHeader {
	tasks: ITask[],
	setTasks: (tasks: ITask[]) => void
}

const Header: FC<IHeader> = ({tasks, setTasks}) => {
	const [active, setActive] = useState(false)

	const isAllSelected = tasks.filter(task => !task.success).length === 0

	const styles = useHeaderStyles()

	useEffect(() => {
		setActive(isAllSelected)
	}, [isAllSelected])

	const toggleTasksSuccess = () => {
		if (isAllSelected) {
			setTasks(tasks.map(task => ({...task, success: false})))
		}
		else {
			setTasks(tasks.map(task => ({...task, success: true})))
		}
	}

	return (
		<Box className={styles.header}>
			<Checkbox onClick={toggleTasksSuccess} className={styles.checkbox} active={active}/>
			<Typography>Today Tasks</Typography>
		</Box>
	)
}

export default Header

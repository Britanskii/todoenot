import {Box} from "@mui/material"
import {useDropdownStyles} from "./useDropdownStyles"
import Header from "./header/Header"
import ScheduleAnimate from "./schedule/ScheduleAnimate"
import {FC, useEffect, useState} from "react"
import {TEMP_TASKS} from "../../temp/tasks"
import {ITask} from "../../interfaces/interfaces"

interface IDropdown {
	id: string,
	title: string
}

const Dropdown: FC<IDropdown> = ({title, id}) => {
	const [tasks, setTasks] = useState(TEMP_TASKS)
	const [isOpen, setIsOpen] = useState(false)

	const styles = useDropdownStyles()

	const setLocalTasks = (tasks: ITask[]) => {
		localStorage.setItem(`${id}_task`, JSON.stringify(tasks))
	}

	useEffect(() => {
		const localTasks = localStorage.getItem(`${id}_task`)
		if (localTasks) {
			const tasks = JSON.parse(localTasks) as ITask[]
			setTasks(tasks)
		}
	}, [])

	return (
		<Box className={styles.dropdown}>
			<Header title={title} isOpen={isOpen} setIsOpen={setIsOpen}/>
			<ScheduleAnimate setTasks={setLocalTasks} tasks={tasks} isOpen={isOpen}/>
		</Box>
	)
}

export default Dropdown

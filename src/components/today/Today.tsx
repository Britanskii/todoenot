import Schedule from "../dropdown/schedule/Schedule"
import Header from "./header/Header"
import {useTodayStyles} from "./useTodayStyles"
import {useEffect, useState} from "react"
import {Box} from "@mui/material"
import {ITask} from "../../interfaces/interfaces"
import {TEMP_TASKS_2} from "../../temp/tasks"

const Today = () => {
	const [tasks, setTasks] = useState<ITask[]>(TEMP_TASKS_2)

	const styles = useTodayStyles()

	const setLocalTasks = (tasks: ITask[]) => {
		localStorage.setItem("tasks", JSON.stringify(tasks))
		setTasks(tasks)
	}

	useEffect(() => {
		const localTasks = localStorage.getItem("tasks")
		if (localTasks) {
			const tasks = JSON.parse(localTasks) as ITask[]
			setTasks(tasks)
		}
	}, [])

	return (
		<Box className={styles.today}>
			<Header tasks={tasks}/>
			<Schedule tasks={tasks} setTasks={setLocalTasks} className={styles.body}/>
		</Box>
	)
}

export default Today

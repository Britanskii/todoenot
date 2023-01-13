import {ITask} from "../../../../interfaces/interfaces"

export const setSuccessTask = (tasks: ITask[], setTasks: (tasks: ITask[]) => void, id: number, bool: boolean) => {
	const selectTasks = tasks.map(task => ({...task, success: task.id === id ? bool : task.success}))
	if (setTasks) {
		setTasks(selectTasks)
	}
}

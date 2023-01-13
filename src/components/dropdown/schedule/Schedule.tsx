import {Box} from "@mui/material"
import {useScheduleStyles} from "./useScheduleStyles"
import Information from "../information/Information"
import {FC} from "react"
import {setSuccessTask} from "./functions/functions"
import {ITask} from "../../../interfaces/interfaces"

interface ISchedule {
	className?: string
	tasks: ITask[],
	setTasks: (tasks: ITask[]) => void
}

const Schedule: FC<ISchedule> = ({className, tasks, setTasks}) => {

	const styles = useScheduleStyles()

	return (
		<Box className={`${styles.body} ${className}`}>
			{tasks.map(({id, title, subtitle, success}, index) => {
				const withChange = (bool: boolean) => setSuccessTask(tasks, setTasks, id, bool)

				return <Information id={id} success={success} key={id} title={title} subtitle={subtitle}
					colorIndex={index} withChange={withChange}/>
			})}
		</Box>
	)
}

export default Schedule

import {Box} from "@mui/material"
import Today from "../today/Today"
import {useTasksStyles} from "./useTasksStyles"
import Calendar from "../calendar/Calendar"

const Tasks = () => {

	const styles = useTasksStyles()

	return (
		<Box className={styles.tasks}>
			<Today/>
			<Calendar/>
		</Box>
	)
}

export default Tasks

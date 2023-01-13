import {Box} from "@mui/material"
import {useToDoStyles} from "./useToDoStyles"
import Header from "../../components/header/Header"
import Tasks from "../../components/tasks/Tasks"

const ToDo = () => {

	const styles = useToDoStyles()

	return (
		<Box className={styles.todo}>
			<Header/>
			<Tasks/>
		</Box>
	)
}

export default ToDo

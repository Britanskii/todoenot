import {Box, Typography} from "@mui/material"
import {useToDoStyles} from "./useToDoStyles"
import Header from "../../components/header/Header"

const ToDo = () => {

	const styles = useToDoStyles()

	return (
		<Box className={styles.todo}>
			<Header/>
		</Box>
	)
}

export default ToDo

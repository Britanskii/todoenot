import {Box, Typography} from "@mui/material"
import Settings from "../settings/Settings"
import {useHeaderStyles} from "./useHeaderStyles"


const Header = () => {

	const styles = useHeaderStyles()

	return (
		<Box className={styles.header} component={"header"}>
			<Typography variant={"h1"} component={"h1"}>To Do</Typography>
			<Settings/>
		</Box>
	)
}

export default Header

import {FC} from "react"
import {useScheduleStyles} from "./useScheduleStyles"
import {AnimatePresence, motion} from "framer-motion"
import {dropVariants} from "../../../animations/variants/variants"
import {Box} from "@mui/material"
import Information from "../information/Information"
import {setSuccessTask} from "./functions/functions"
import {ITask} from "../../../interfaces/interfaces"

interface IDropdownScheduleAnimate {
	isOpen: boolean,
	tasks: ITask[],
	setTasks: (tasks: ITask[]) => void
}

const ScheduleAnimate: FC<IDropdownScheduleAnimate> = ({isOpen, tasks, setTasks}) => {

	const styles = useScheduleStyles()

	return (
		<AnimatePresence>
			{
				isOpen &&
				<motion.div variants={dropVariants} initial={"initial"} animate={"animate"} exit={"exit"}
					className={styles.dropdown}>
					<Box className={`${styles.body} ${styles.dropbody}`}>
						{tasks.map(({id, title, subtitle, success}, index) => {
							const withChange = (bool: boolean) => setSuccessTask(tasks, setTasks, id, bool)
							return <Information id={id} success={success} key={id} title={title}
								subtitle={subtitle} colorIndex={index} withChange={withChange}/>
						}
						)}
					</Box>
				</motion.div>
			}
		</AnimatePresence>

	)
}

export default ScheduleAnimate

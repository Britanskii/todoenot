import {Box, Typography} from "@mui/material"
import {useInformationStyles} from "./useInformationStyles"
import Line from "../../line/Line"
import { FC, useEffect, useState} from "react"
import Switch from "../../switch/Switch"
import IsCross from "../../isCross/IsCross"

interface IInformation {
	title: string,
	id: number,
    colorIndex: number,
    subtitle: string,
	withChange?: (bool: boolean) => void,
	success: boolean
}

const Information: FC<IInformation> = ({success, colorIndex, subtitle, title, withChange}) => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setIsSuccess(success)
	}, [success])

	const setActive = (bool: boolean) => {
		setIsSuccess(bool)
		if (withChange) {
			withChange(bool)
		}
	}

	const styles = useInformationStyles()

	return (
		<Box className={styles.information}>
			<Box className={styles.main}>
				<Line colorIndex={colorIndex} className={styles.line}/>
				<Box>
					<Typography className={styles.title} component={"div"} variant={"body1"}>
						<IsCross isCross={isSuccess}>
							{title}
						</IsCross>
					</Typography>
					<Box className={styles.subtitle}>
						<Typography variant={"body2"}>{subtitle}</Typography>
					</Box>
				</Box>
			</Box>
			<Switch active={isSuccess} setActive = {setActive} className={styles.switch}/>
		</Box>
	)
}

export default Information

import {Box, Typography} from "@mui/material"
import {useMarqueeStyles} from "./useMarqueeStyles"
import {useQuery} from "react-query"
import {useContext, useEffect, useState} from "react"
import {NewsService} from "../../api/NewsService"
import {TickerContext} from "../../App"
import {AnimatePresence, motion} from "framer-motion"
import {opacityVariants} from "../../animations/variants/variants"
import {queryStatus} from "../../interfaces/interfaces"

const Marquee = () => {
	const [news, setNews] = useState("")

	const newsData = useQuery("news", () => NewsService.getOneNewsLine(5))

	const styles = useMarqueeStyles()

	const {isMarquee} = useContext(TickerContext)

	useEffect(() => {
		if (newsData.status === queryStatus.SUCCESS) {
			setNews(newsData.data)
		} else if (newsData.status === queryStatus.LOADING) {
			setNews("Loading...")
		} else if (newsData.status == queryStatus.ERROR) {
			setNews("Try later...")
		}
	}, [newsData])

	return (
		<AnimatePresence>
			{isMarquee &&
				<motion.div variants={opacityVariants} initial={"initial"} animate={"animate"} exit={"exit"} className={styles.marquee}>
					<Box	className={styles.wrapper}>
						<Typography	variant={"body1"}	className={styles.line}>
							{news}
						</Typography>
						<Typography	variant={"body1"}	className={styles.line}>
							{news}
						</Typography>
					</Box>
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default Marquee

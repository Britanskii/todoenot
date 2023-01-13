import React, {createContext, useState} from "react"
import ToDo from "./modules/todo/ToDo"

import "./styles/reset.sass"
import Marquee from "./modules/marquee/Marquee"
import {Box} from "@mui/material"
import {useAppStyles} from "./useAppStyles"
import {ITickerContext} from "./interfaces/interfaces"

const initialState = {
	isMarquee: true,
	setIsMarquee: (): void => {
		throw new Error("setIsMarquee function must be overridden")
	}
}

export const TickerContext = createContext<ITickerContext>(initialState)

const App = () => {
	const [isMarquee, setIsMarquee] = useState(true)

	const styles = useAppStyles()

	return (
		<Box className={styles.app}>
			<TickerContext.Provider value={{isMarquee, setIsMarquee}}>
				<ToDo/>
				<Marquee/>
			</TickerContext.Provider>
		</Box>
	)
}

export default App

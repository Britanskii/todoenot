import React from "react"
import ToDo from "./interfaces/todo/ToDo"

import "./styles/reset.sass"
import Marquee from "./interfaces/marquee/Marquee"

const App = () => {
	return (
		<>
			<ToDo/>
			<Marquee/>
		</>
	)
}

export default App

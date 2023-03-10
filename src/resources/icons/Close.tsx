import {forwardRef} from "react"
import {motion} from "framer-motion"
import {ISvg} from "../../interfaces/interfaces"

const Close = forwardRef<SVGSVGElement, ISvg>(({onClick, className = ""}, ref) => {

	return (
		<svg ref={ref} onClick={onClick} className={className}  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z" fill="#A9A9A9"/>
		</svg>
	)
})

Close.displayName = "Close"

export default motion(Close)

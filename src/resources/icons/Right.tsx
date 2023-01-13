import {forwardRef} from "react"
import {motion} from "framer-motion"
import {ISvg} from "../../interfaces/interfaces"

const Right = forwardRef<SVGSVGElement, ISvg>(({onClick, className = ""}, ref) => {

	return (
		<svg ref={ref} onClick={onClick} className={className}   width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z" fill="#A9A9A9"/>
		</svg>
	)
})

Right.displayName = "Right"

export default motion(Right)

import {RefObject, useEffect} from "react"

export const useScrollHandler = (ref: RefObject<HTMLDivElement>, func: (event: Event) => void) => {
	useEffect(() => {
		if (ref && ref.current) {
			ref.current.addEventListener("scroll", func)
		}

		return () => {
			if (ref && ref.current) {
				ref.current.removeEventListener("scroll", func)
			}
		}
	}, [ref.current])
}

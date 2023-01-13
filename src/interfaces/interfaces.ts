import {Dispatch, SetStateAction} from "react"

export interface ISvg {
	className?: string
	onClick?: () => void
}

export interface ITask {
	id: number,
	title: string,
	subtitle: string,
	success: boolean
}

export enum Color {
	first,
	second,
	third,
	main
}

export enum queryStatus {
	SUCCESS = "success",
	LOADING = "loading",
	ERROR = "error"
}

export interface ITickerContext {
	isMarquee: boolean
	setIsMarquee: Dispatch<SetStateAction<boolean>>
}

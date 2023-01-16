import {Box} from "@mui/material"
import addZero from "../../helpers/addZero"
import Dropdown from "../dropdown/Dropdown"
import {useCalendarStyles} from "./useCalendarStyles"
import {useEffect, useRef, useState} from "react"
import {getDaysByMonthAndYear} from "../../helpers/calendar"
import {useScrollHandler} from "../../hooks/useScrollHandler"

const date = new Date()

interface IMonth {
	monthNumber: number,
	daysCount: number,
	daysMax: number,
	year: number
}

const Calendar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [currentYear, setCurrentYear] = useState(0)
	const [currentMonth, setCurrentMonth] = useState<IMonth>()
	const [months, setMonths] = useState<IMonth[]>([])

	const refCalendar = useRef<HTMLDivElement>(null)

	const styles = useCalendarStyles()

	const scrollHandler = (event: Event) => {
		const scrollEvent = event.target as HTMLDivElement

		const scrollBottom = scrollEvent.scrollTop + scrollEvent.offsetHeight

		const scrollPercent = Math.round((scrollBottom / scrollEvent.scrollHeight) * 100)

		if (scrollPercent > 95) {
			setIsScrolled(true)
		}
	}

	useScrollHandler(refCalendar, scrollHandler)

	const getNewDayLayout = (day: number, month: number, year: number) => {
		const id =`${day}/${month}/${year}`

		const isTomorrow = month === date.getMonth() + 1 && day === date.getDate() + 1

		return <Dropdown id ={id} key={id} title={isTomorrow ? "Tomorrow Tasks" : `${addZero(day)}/${month} Tasks`}/>
	}

	useEffect(() => {
		const monthNumber = date.getMonth() + 1
		const year = date.getFullYear()
		const daysMax = getDaysByMonthAndYear(monthNumber, year)

		const currentMonth = {monthNumber, daysMax, daysCount: daysMax, year}

		setCurrentYear(year)
		setCurrentMonth(currentMonth)
		setMonths([currentMonth])
	}, [])

	useEffect(() => {
		if (isScrolled) {
			setIsScrolled(false)

			const nextDay = currentMonth!.daysCount + 1

			if (nextDay - 1 !==  currentMonth!.daysMax) {
				setMonths((months) => {
					const index = months.indexOf(currentMonth as IMonth)

					months[index].daysCount += 0.5

					return months
				})
			} else {
				let year = currentYear
				let monthNumber = currentMonth!.monthNumber + 1
				if (monthNumber % 13 === 0) {
					setCurrentYear(++year)
					monthNumber = (monthNumber) % 12
				}
				const daysMax = getDaysByMonthAndYear(monthNumber, year)
				const newCurrentMonth = {monthNumber, daysMax, daysCount: 1, year}
				setCurrentMonth(newCurrentMonth)
				setMonths(months => months = [...months, newCurrentMonth])
			}
		}
	}, [isScrolled])

	return (
		<Box ref={refCalendar} className={styles.calendar}>
			{months.map((month, index) => {
				const layout = []
				for (let day = index === 0 ? date.getDate() + 1 : 1; day <= month.daysCount; day++) {
					layout.push(getNewDayLayout(day, month.monthNumber, month.year))
				}

				return layout
			})}
		</Box>
	)
}

export default Calendar

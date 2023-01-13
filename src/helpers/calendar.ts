export const getLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

export const getDaysByMonthAndYear = (month: number, year: number) => {
	const february = getLeapYear(year) ? 29 : 28
	const days = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	return days[month - 1]
}

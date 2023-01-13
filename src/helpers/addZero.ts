const addZero = (number: number | string) => {
	return number.toString().length === 1 ? `0${number}` : number
}

export default addZero

import toRem from "../../helpers/toRem"

export const dropVariants = {
	initial: {height: 0, opacity: 0},
	animate: {height: "auto", opacity: 1},
	exit: {opacity: 0, height: 0}
}

export const crossVariants = {
	initial: {
		width: 0,
		transition: {
			type: "linear",
			ease: "easeIn",
			duration: ".2"
		}
	},
	animate: {
		width: "100%"
	}
}

export const rotateVariants = {
	rotateLeft: {rotate: -180},
	rotateRight: {rotate: 180}
}

export 	const rotateArrowVariants = {
	up: {rotate: 0},
	down: {rotate: -180}
}

export const popupVariants = {
	initial: {y: toRem(-10), opacity: 0},
	animate: {y: toRem(0), opacity: 1},
	exit: {opacity: 0}
}

export const appearVariants = {
	disable: {
		x: toRem(3.5),
		y: toRem(2.5)
	},
	active:  {
		x: toRem(22.5),
		y: toRem(2.5)
	}
}

export const opacityVariants = {
	initial: {opacity: 0},
	animate: {opacity: 1},
	exit: {opacity: 0}
}

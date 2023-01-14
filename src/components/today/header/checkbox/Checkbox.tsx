import {useCheckboxStyles} from "./useCheckboxStyles"
import {FC} from "react"
import {ISvg} from "../../../../interfaces/interfaces"

interface ICheckbox extends ISvg {
    active: boolean
}

const Checkbox: FC<ICheckbox> = ({active, onClick, className = ""}) => {

	const styles = useCheckboxStyles()

	return (
		<svg onClick={onClick} className={`${styles.checkbox} ${className}`}
			viewBox={"0 0 23 23"}
			fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={`${styles.background} ${active ? styles.active : ""}`}
				d="M16.4908 0C20.3893 0 22.9998 2.73697 22.9998 6.80794V16.2045C22.9998 20.2628 20.3893 22.9998 16.4908 22.9998H6.52044C2.62198 22.9998 0 20.2628 0 16.2045V6.80794C0 2.73697 2.62198 0 6.52044 0H16.4908ZM16.3069 8.04993C15.9159 7.65893 15.2719 7.65893 14.8809 8.04993L10.1314 12.7994L8.11893 10.7869C7.72793 10.3959 7.08393 10.3959 6.69294 10.7869C6.30194 11.1779 6.30194 11.8104 6.69294 12.2129L9.42991 14.9384C9.62541 15.1339 9.87841 15.2259 10.1314 15.2259C10.3959 15.2259 10.6489 15.1339 10.8444 14.9384L16.3069 9.47591C16.6978 9.08492 16.6978 8.45242 16.3069 8.04993Z"
				fill="#F4F4F4"/>
		</svg>
	)
}

export default Checkbox

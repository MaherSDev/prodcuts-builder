import { memo, type InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: IProps) => {
	return (
		<input className="border border-gray-300 shadow-dropdown rounded-lg p-2 text-sm focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor" {...rest} />
	)
}

export default memo(Input);
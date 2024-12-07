import React from "react";

export interface InputProps {
	id?: string;
	type: string;
	placeholder?: string;
	name: string;
	value: string | number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	disabled?: boolean;
	required?: boolean;
};

const Input: React.FC<InputProps> = ({ id, type, placeholder, name, value, onChange, className, disabled, required }) => {
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}
			className={className}
			disabled={disabled}
			required={required}
		/>
	);
};

export default Input;

import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import styles from './input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

enum InputTheme {
	UNDERLINED = 'underlined',
}

// takes all props from type and exclude props we need. Take from HTMLInputElement, exclude value, onChange
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	theme?: string;
	label?: string;
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	autofocus?: boolean;
}

export const Input = memo(
	({
		className,
		theme = InputTheme.UNDERLINED,
		label,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	}: InputProps) => {
		const ref = useRef<HTMLInputElement>(null);
		const [focused, setIsFocused] = useState(false);
		useEffect(() => {
			if (autofocus) {
				setIsFocused(true);
				ref.current.focus();
			}
		}, [autofocus]);

		const onFocus = () => {
			setIsFocused(true);
		};

		const onBlur = () => {
			setIsFocused(false);
		};

		const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value); // if props onChange passed. Like onChange && onChange(.....)
		};

		return (
			<div className={classNames(styles.container, [className, styles[theme]])}>
				<input
					ref={ref}
					id='input'
					className={styles.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					placeholder={theme === InputTheme.UNDERLINED ? ' ' : placeholder}
					{...otherProps}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				<label htmlFor='input' className={styles.label}>
					{label}
				</label>
			</div>
		);
	}
);

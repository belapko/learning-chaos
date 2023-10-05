import React, { InputHTMLAttributes, memo } from 'react';
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
		...otherProps
	}: InputProps) => {
		const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value); // if props onChange passed. Like onChange && onChange(.....)
		};

		return (
			<div className={classNames(styles.container, [className, styles[theme]])}>
				<input
					id='input'
					className={styles.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					placeholder={theme === InputTheme.UNDERLINED ? ' ' : placeholder}
					{...otherProps}
				/>
				<label htmlFor='input' className={styles.label}>
					{label}
				</label>
			</div>
		);
	}
);

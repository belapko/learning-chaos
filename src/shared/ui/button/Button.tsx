import styles from './button.module.scss';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}

interface ButtonProps {
	className?: string;
	theme?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className,
	theme = ButtonTheme.CLEAR,
	disabled,
	...otherProps
}) => {
	const mods: Record<string, boolean> = {
		[styles.disabled]: disabled,
	};

	return (
		<button
			className={classNames(styles.button, [className, styles[theme]], mods)}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};

import styles from './button.module.scss';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames';

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps {
	className?: string;
	theme?: string;
	onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className,
	theme = ButtonTheme.CLEAR,
	...otherProps
}) => {
	return (
		<button className={classNames(styles.button, [className, styles[theme]])} {...otherProps}>
			{children}
		</button>
	);
};

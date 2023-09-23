import styles from './link.module.scss';
import { FC, PropsWithChildren } from 'react';
import { Link as ReactLink, LinkProps as ReactLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum LinkTheme {
	PRIMARY = 'primary',
}

interface LinkProps extends ReactLinkProps {
	className?: string;
	theme?: string;
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({
	to,
	children,
	className,
	theme = LinkTheme.PRIMARY,
	...otherProps
}) => {
	return (
		<ReactLink to={to} className={classNames(styles.link, [className, styles[theme]])} {...otherProps}>
			{children}
		</ReactLink>
	);
};

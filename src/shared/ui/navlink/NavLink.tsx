import styles from './navlink.module.scss';
import { FC, PropsWithChildren } from 'react';
import { NavLink as ReactNavLink, LinkProps as ReactLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum NavLinkTheme {
	PRIMARY = 'primary',
}

interface NavLinkProps extends ReactLinkProps {
	className?: string;
	theme?: string;
}

export const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
	to,
	children,
	className,
	theme = NavLinkTheme.PRIMARY,
	...otherProps
}) => {
	const handleStyles = (cls: string) => classNames(styles[cls], [className, styles[theme]]);
	return (
		<ReactNavLink to={to} className={({ isActive }) => handleStyles(isActive ? 'active' : 'link')} {...otherProps}>
			{children}
		</ReactNavLink>
	);
};

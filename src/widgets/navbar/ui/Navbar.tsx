import styles from './navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavLink } from '@/shared/ui/navlink/NavLink';
import { ThemeSwitcher } from '@/widgets/theme';
import { LangSwitcher } from '@/widgets/lang';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from '@/features/auth-username';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { getUserAuthData, userActions } from '@/entities/user';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('navbar');

	const authData = useAppSelector(getUserAuthData);

	const [isAuthModal, setIsAuthModal] = useState(false);

	const dispatch = useAppDispatch();

	const handleOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	return (
		<nav className={classNames(styles.navbar, [className])}>
			<ul className={styles.gap10}>
				<li>
					<ThemeSwitcher />
				</li>
				<li>
					<LangSwitcher />
				</li>
			</ul>
			<ul className={styles.gap10}>
				<li>
					<NavLink to={'/'}>{t('Main')}</NavLink>
				</li>
				<li>
					<NavLink to={'/about'}>{t('About')}</NavLink>
				</li>
			</ul>
			<a className={styles.productName} href='https://github.com/belapko' target='_blank' rel='noreferrer'>
				{t('Belapko')}
			</a>
			<ul>
				<li>
					<Button theme={ButtonTheme.CLEAR} onClick={authData ? onLogout : handleOpenModal}>
						{t(authData ? 'Sign out' : 'Sign in')}
					</Button>
				</li>
			</ul>
			{!authData && <LoginModal isOpen={isAuthModal} onClose={handleCloseModal}/>}
		</nav>
	);
};

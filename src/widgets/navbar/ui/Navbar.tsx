import styles from './navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavLink } from '@/shared/ui/navlink/NavLink';
import { ThemeSwitcher } from '@/widgets/theme';
import { LangSwitcher } from '@/widgets/lang';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/button/Button';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/modal/Modal';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('navbar');

	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<nav className={classNames(styles.navbar, [className])}>
			<Modal title={t('Sign in')} isOpen={isAuthModal} onClose={onToggleModal}>

			</Modal>
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
					<Button theme={ButtonTheme.CLEAR} onClick={onToggleModal}>
						{t('Sign in')}
					</Button>
				</li>
			</ul>
		</nav>
	);
};

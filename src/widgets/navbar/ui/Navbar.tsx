import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavLink } from '@/shared/ui/navlink/NavLink';
import { ThemeSwitcher } from '@/widgets/theme';
import { LangSwitcher } from '@/widgets/lang';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { theme } = useTheme();
	const { t } = useTranslation('navbar');

	return (
		<nav className={classNames(styles.navbar, [className, styles[theme]])}>
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
				<li></li>
			</ul>
		</nav>
	);
};

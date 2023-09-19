import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import styles from './theme.module.scss';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button className={classNames(styles.switcher, [className])} onClick={toggleTheme}>
			{theme === Theme.DARK ? <SunIcon className={styles.icon} /> : <MoonIcon className={styles.icon} />}
		</Button>
	);
};

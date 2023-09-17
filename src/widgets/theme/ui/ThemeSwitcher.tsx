import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import styles from './theme.module.scss';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { Theme } from '@/app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className={classNames(styles.swither, [className])} onClick={toggleTheme}>
            <div className={styles.icon}>{theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}</div>
        </button>
    );
};

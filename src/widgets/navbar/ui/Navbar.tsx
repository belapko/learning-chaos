import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './navbar.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { Link } from '@/shared/ul/link/Link';
import { ThemeSwitcher } from '@/widgets/theme';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme } = useTheme();

    return (
        <nav className={classNames(styles.navbar, [className, styles[theme]])}>
            <ThemeSwitcher />
            <ul className={styles.links}>
                <li>
                    <Link to={'/'}>main</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>
            </ul>
            <a className={styles.productName} href='https://github.com/belapko' target='_blank'>
                Belapko
            </a>
            <ul>
                <li></li>
            </ul>
        </nav>
    );
};

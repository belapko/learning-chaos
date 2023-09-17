import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './sidebar.module.scss';
import MenuIcon from '@/shared/assets/icons/menu.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [show, setShow] = useState(false);

    const onToggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <div className={classNames(styles.sidebar, [className], { [styles.show]: show })}>
            <div className={styles.iconsContainer}>
                <button className={styles.button} onClick={onToggle}>
                    <MenuIcon className={styles.icon}/>
                </button>
            </div>
            <div className={styles.iconsTextContainer}>
                <button className={styles.button} onClick={onToggle}>
                    Меню
                </button>
            </div>
        </div>
    );
};

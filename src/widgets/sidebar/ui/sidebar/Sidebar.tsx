import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(styles.sidebar, [className], { [styles.collapsed]: collapsed })}>
            <div className={styles.iconsContainer}>
                <button onClick={onToggle}>collapse</button>
            </div>
        </div>
    );
};

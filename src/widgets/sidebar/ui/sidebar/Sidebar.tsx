import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './sidebar.module.scss';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button/Button';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation('sidebar');
	const [show, setShow] = useState(false);

	const onToggle = () => {
		setShow((prevState) => !prevState);
	};

	return (
		<div data-testid='sidebar' className={classNames(styles.sidebar, [className], { [styles.show]: show })}>
			<div className={classNames(styles.iconsContainer, [], {[styles.show]: show})}>
				<Button data-testid='sidebar-toggle' className={styles.button} onClick={onToggle}>
					<MenuIcon className={styles.icon} />
				</Button>
			</div>
			<div className={classNames(styles.iconsTextContainer, [], { [styles.show]: show })}>
				<Button className={classNames(styles.button, [styles.menuTitle])} onClick={onToggle}>
					{t('Menu')}
				</Button>
			</div>
		</div>
	);
};

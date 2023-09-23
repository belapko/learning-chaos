import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './spinner.module.scss';

interface SpinnerProps {
	className?: string;
	isPage?: boolean;
}

export const Spinner = ({ className, isPage = false }: SpinnerProps) => {
	return (
		<div className={classNames(styles.container, [className], { [styles['page']]: isPage })}>
			<span className={styles.spinner}></span>
		</div>
	);
};

// ulbi 34 Auth 32 mins remaining
import styles from './text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TextProps {
	className?: string;
	title?: string;
	paragraph?: string;
    isError?: boolean;
}

export const Text = ({ className, title, paragraph, isError }: TextProps) => {
	return (
		<div className={classNames(styles.text, [className], {[styles.error]: isError})}>
			{title && <h3 className={styles.title}>{title}</h3>}
			{paragraph && <p className={styles.paragraph}>{paragraph}</p>}
		</div>
	);
};

import styles from './modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '@/shared/portal/Portal';
import { useTheme } from '@/app/providers/theme';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	title?: string;
	isOpen: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 100;

export const Modal = ({ className, children, title, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const { theme } = useTheme();

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.closing]: isClosing,
	};

	// useCallback - memoization of the function so that new links are not created for each render, while dependencies array not be changed
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	// useCallback - memoization of the function so that new links are not created for each render, while dependencies array not be changed
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<Portal>
			<div className={classNames(styles.modal, [theme, className], mods)}>
				<div className={styles.overlay} onClick={closeHandler}>
					<div className={styles.content} onClick={onContentClick}>
						{title && <h1 className={styles.header}>{title}</h1>}
						<div>{children}</div>
					</div>
				</div>
			</div>
		</Portal>
	);
};

import styles from './loginModal.module.scss';
import { Modal } from '@/shared/ui/modal/Modal';
import { LoginForm } from '../login/LoginForm';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal className={classNames(styles.modal, [className])} isOpen={isOpen} onClose={onClose} lazy={true}>
			<LoginForm />
		</Modal>
	);
};

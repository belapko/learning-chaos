import { Modal } from '@/shared/ui/modal/Modal';
import { Suspense, useEffect } from 'react';
import { LoginFormLazy } from '../login/LoginForm.lazy';
import { Spinner } from '@/shared/ui/spinner/Spinner';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	useEffect(() => {
		return () => {
			onClose();
		};
	}, [onClose]);

	return (
		<Modal className={className} isOpen={isOpen} onClose={onClose} lazy={true}>
			<Suspense fallback={<Spinner />}>
				<LoginFormLazy />
			</Suspense>
		</Modal>
	);
};

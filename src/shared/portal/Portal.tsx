import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode; // element to be teleported
	container?: HTMLElement; // element where children will be teleported
}

export const Portal = ({ children, container = document.body }: PortalProps) => {
	return createPortal(children, container);
};

import './styles/index.scss';
import { useTheme } from './providers/theme';
import { withRouter } from './providers';
import { Suspense, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Routing from '@/pages';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { Modal } from '@/shared/ui/modal/Modal';

const App = () => {
	const { theme } = useTheme();

	const [isModalOpen, setIsModalOpen] = useState(false); {/* TODO: */}

	return (
		<div className={classNames('app', [theme])}>
			<Suspense fallback=''>
				<Modal title='Заголовок модального окна' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}><p>Some paragraph</p></Modal>
				<button onClick={() => setIsModalOpen(true)}>Open modal</button> {/* TODO: */}
				<Navbar />
				<div className='page-container'>
					<Sidebar />
					<div className='content'>
						<Routing />
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default withRouter(App);

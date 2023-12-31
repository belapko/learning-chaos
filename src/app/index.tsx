import './styles/index.scss';
import { useTheme } from './providers/theme';
import { withRouter } from './providers';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Routing from '@/pages';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<Suspense fallback=''>
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

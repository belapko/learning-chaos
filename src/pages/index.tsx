import { Routes, Route } from 'react-router-dom';
import { routes } from '@/shared/config/routes/routes';
import { Suspense } from 'react';
import { Spinner } from '@/shared/ui/spinner/Spinner';

const Routing = () => {
	return (
		<Routes>
			{routes.map(({ element, path }, index) => (
				<Route key={index} path={path} element={<Suspense fallback={<Spinner isPage={true} />}>{element}</Suspense>} />
			))}
		</Routes>
	);
};

export default Routing;

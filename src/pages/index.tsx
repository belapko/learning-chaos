import { Routes, Route } from 'react-router-dom';
import { routes } from '@/shared/config/routes/routes';

export const Routing = () => {
	return (
		<Routes>
			{routes.map(({ element, path }, index) => (
				<Route key={index} path={path} element={element} />
			))}
		</Routes>
	);
};

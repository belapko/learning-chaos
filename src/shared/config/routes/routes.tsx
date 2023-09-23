import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/404';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',

	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',

	[AppRoutes.NOT_FOUND]: '*',
};

export const routes: Array<RouteProps> = [
	{
		path: RoutePath.main,
		element: <MainPage />,
	},
	{
		path: RoutePath.about,
		element: <AboutPage />,
	},

	{
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
];

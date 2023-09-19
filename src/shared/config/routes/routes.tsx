import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
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
];

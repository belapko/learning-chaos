import { lazy } from 'react';

export const MainPageLazy = lazy(() => import('./MainPage'));

// export const MainPageLazy = lazy(() => {
// 	return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => import('./MainPage'));
// });

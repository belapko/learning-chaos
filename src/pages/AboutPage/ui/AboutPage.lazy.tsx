import { lazy } from 'react';

export const AboutPageLazy = lazy(() => import('./AboutPage')); // component must be default export (not named export)

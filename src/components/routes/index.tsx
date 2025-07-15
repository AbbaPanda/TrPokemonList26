import { lazy, type ComponentType } from 'react';

interface Router {
  path: string;
  element: ComponentType;
}

export const routes: Router [] = [
  {
    path: '/',
    element: lazy(() => import('../pages/homeapge/HomeView')),
  },
];

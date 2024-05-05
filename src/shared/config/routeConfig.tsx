import { RouteProps } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage';
import { FeaturesPage } from '../../pages/FeaturesPage';
import { HomePage } from '../../pages/HomePage';
import { NewsPage } from '../../pages/NewsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { CardDetails } from '../../pages/CardDetails';

export enum AppRoutes {
  ABOUT = 'about',
  FEATURES = 'features',
  HOME = 'home',
  NEWS = 'news',
  CARD_DETAILS = 'cardDetails',

  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.FEATURES]: '/features',
  [AppRoutes.HOME]: '/supplement-task',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.CARD_DETAILS]: '/card/:id',

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [AppRoutes.FEATURES]: {
    path: RoutePath.features,
    element: <FeaturesPage />,
  },
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
  [AppRoutes.CARD_DETAILS]: {
    path: RoutePath.cardDetails,
    element: <CardDetails />,
  },
};

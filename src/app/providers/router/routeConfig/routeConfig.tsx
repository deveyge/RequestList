import { RequestCreatePage } from "pages/RequestCreatePage";
import { RequestPage } from "pages/RequestPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  REQUEST = "request",
  NEWREQUEST = "new",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.REQUEST]: "/request",
  [AppRoutes.NEWREQUEST]: "/request/new",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.REQUEST]: {
    path: RoutePath[AppRoutes.REQUEST],
    element: <RequestPage />,
  },
  [AppRoutes.NEWREQUEST]: {
    path: RoutePath[AppRoutes.NEWREQUEST],
    element: <RequestCreatePage />,
  },
};

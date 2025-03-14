import { RequestCreatePage } from "pages/RequestCreatePage";
import RequestDetailPage from "pages/RequestDetailPage/ui/RequestDetailPage";
import { RequestPage } from "pages/RequestPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  REQUEST = "request",
  NEWREQUEST = "new",
  DETAILREQUEST ="detail"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.REQUEST]: "/requests",
  [AppRoutes.NEWREQUEST]: "/requests/new",
  [AppRoutes.DETAILREQUEST]: "/requests/:id",
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
  [AppRoutes.DETAILREQUEST]: {
    path: RoutePath[AppRoutes.DETAILREQUEST],
    element: <RequestDetailPage />,
  },
};

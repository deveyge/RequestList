import { RequestCreatePage } from "pages/RequestCreatePage";
import RequestDetailPage from "pages/RequestDetailPage/ui/RequestDetailPage";
import { RequestPage } from "pages/RequestPage";
import { Navigate, RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  REQUEST = "request",
  NEWREQUEST = "new",
  DETAILREQUEST ="detail"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.REQUEST]: "/requests",
  [AppRoutes.NEWREQUEST]: "/requests/new",
  [AppRoutes.DETAILREQUEST]: "/requests/:id",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <Navigate to={RoutePath[AppRoutes.REQUEST]} replace />,
},
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

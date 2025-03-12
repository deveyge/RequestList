import { RequestPage } from "pages/RequestPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  REQUEST = "request",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.REQUEST]: "/request",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.REQUEST]: {
    path: RoutePath.request,
    element: <RequestPage />,
  },
};

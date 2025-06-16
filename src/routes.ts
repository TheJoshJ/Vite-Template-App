import { type RouteComponent } from "@tanstack/react-router";
import Home from "./pages/Home";

export interface RouteConfig {
  path: string;
  component: RouteComponent<any>;
  label: string;
  visible?: boolean;
}

export const routes: Record<string, RouteConfig> = {
  home: {
    path: "/",
    component: Home,
    label: "Home",
  },
  // Add more routes here as needed
};

export const visibleRoutes = Object.values(routes).filter(
  (route) => route.visible
);

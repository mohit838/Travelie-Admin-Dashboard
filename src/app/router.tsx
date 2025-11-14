import { createBrowserRouter, Navigate } from "react-router";

// Outlets
import { AuthOutlet } from "./outlets/auth-outlet";
import { NoAuthOutlet } from "./outlets/no-auth-outlet";
import { PermissionOutlet } from "./outlets/permission-outlet";

// Layouts and Pages
import DashboardIndexPage from "@/features/dashboard";
import DashboardLayout from "@/shared/components/layout/dashboard-layout";
import { PAGE_ROUTES } from "@/shared/page-routes";

export const router = createBrowserRouter([
  {
    element: <NoAuthOutlet />,
    children: [],
  },

  {
    element: <AuthOutlet />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to={PAGE_ROUTES.DASHBOARD} /> },
          { path: PAGE_ROUTES.DASHBOARD, element: <DashboardIndexPage /> },

          {
            path: "/admin",
            element: <PermissionOutlet required={["ADMIN", "SUPER_ADMIN"]} />,
            children: [
              { index: true, element: <>Admin Home</> },
              { path: "users", element: <>Manage Users</> },
            ],
          },
        ],
      },
    ],
  },

  { path: "/403", element: <>403 Access Denied</> },
  { path: "*", element: <>404 Not Found</> },
]);

import { createBrowserRouter, Navigate } from "react-router";

// Outlets
import { AuthOutlet } from "./outlets/auth-outlet";
import { NoAuthOutlet } from "./outlets/no-auth-outlet";
import { PermissionOutlet } from "./outlets/permission-outlet";

// Routes
import { PAGE_ROUTES } from "@/shared/page-routes";

// Layouts and Pages
import DashboardIndexPage from "@/features/dashboard";
import DashboardLayout from "@/shared/components/layout/dashboard-layout";

// Auth Pages
import LoginPage from "@/features/auth/login";
import RegisterPage from "@/features/auth/register";

export const router = createBrowserRouter([
  // ----------------------------
  //     PUBLIC (NO AUTH)
  // ----------------------------
  {
    element: <NoAuthOutlet />,
    children: [
      { path: PAGE_ROUTES.LOGIN, element: <LoginPage /> },
      { path: PAGE_ROUTES.REGISTER, element: <RegisterPage /> },
    ],
  },

  // ----------------------------
  //     PRIVATE (AUTH REQUIRED)
  // ----------------------------
  {
    element: <AuthOutlet />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // default redirect -> dashboard
          { index: true, element: <Navigate to={PAGE_ROUTES.DASHBOARD} /> },

          // dashboard
          { path: PAGE_ROUTES.DASHBOARD, element: <DashboardIndexPage /> },

          // ----------------------------
          //        ADMIN ROUTES
          // ----------------------------
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

  // ----------------------------
  //     ERRORS
  // ----------------------------
  { path: "/403", element: <>403 Access Denied</> },
  { path: "*", element: <>404 Not Found</> },
]);

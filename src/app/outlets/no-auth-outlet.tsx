import { useAppStore } from "@/app/app-store";
import { Navigate, Outlet } from "react-router";

export const NoAuthOutlet = () => {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

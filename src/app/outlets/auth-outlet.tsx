import { useAppStore } from "@/app/app-store";
import { Navigate, Outlet } from "react-router";

export const AuthOutlet = () => {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

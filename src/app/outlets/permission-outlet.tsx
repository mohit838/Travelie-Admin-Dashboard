import { useAppStore } from "@/app/app-store";
import { Navigate, Outlet } from "react-router";

export const PermissionOutlet = ({ required }: { required: string[] }) => {
  const permissions = useAppStore((s) => s.permissions);

  const hasPermission = required.some((perm) => permissions.includes(perm));

  if (!hasPermission) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};

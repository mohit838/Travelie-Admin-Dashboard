import type { BreadcrumbItem } from "@/shared/types/breadcrumb";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface EntityPageProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
}

const EntityPage = ({ title, breadcrumbs = [], children }: EntityPageProps) => {
  return (
    <div className="space-y-4 p-4">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
          {breadcrumbs.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {item.path ? (
                <Link to={item.path} className="text-blue-600 hover:underline dark:text-blue-400">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium">{item.label}</span>
              )}

              {idx < breadcrumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>
      )}

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
};

export default EntityPage;

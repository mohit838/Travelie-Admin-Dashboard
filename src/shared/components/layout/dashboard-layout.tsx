import { useTheme } from "@/shared/hooks/use-theme";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./header/header";
import Overlay from "./sidebar/overlay";
import Sidebar from "./sidebar/sidebar";

function DashboardLayout() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className={theme}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <Overlay sidebarOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <Header theme={theme} activeNav={activeNav} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-auto p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

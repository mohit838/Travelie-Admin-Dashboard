import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import UserMenu from "./user-menu";

interface HeaderProps {
  theme: "light" | "dark";
  activeNav: string;
  setSidebarOpen: (val: boolean) => void;
}

export default function Header({ theme, activeNav, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden dark:hover:bg-gray-700"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{activeNav}</h1>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <ThemeToggle theme={theme} />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

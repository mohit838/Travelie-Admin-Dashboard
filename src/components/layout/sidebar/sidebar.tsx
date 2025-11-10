import { BarChart3, CreditCard, Home, Package, Settings, Users, X, Zap } from "lucide-react";
import SidebarItem from "./sidebar-item";
import UserSection from "./user-section";

const navigation = [
  { name: "Dashboard", icon: Home },
  { name: "Analytics", icon: BarChart3 },
  { name: "Users", icon: Users },
  { name: "Products", icon: Package },
  { name: "Billing", icon: CreditCard },
  { name: "Settings", icon: Settings },
];

interface SidebarProps {
  sidebarOpen: boolean;
  activeNav: string;
  setActiveNav: (name: string) => void;
  onClose: () => void;
}

export default function Sidebar({ sidebarOpen, activeNav, setActiveNav, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Travelie</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navigation.map((item) => (
            <SidebarItem
              key={item.name}
              item={item}
              active={activeNav === item.name}
              onClick={() => {
                setActiveNav(item.name);
                onClose();
              }}
            />
          ))}
        </nav>

        <UserSection />
      </div>
    </aside>
  );
}

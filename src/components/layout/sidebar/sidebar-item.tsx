import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  item: { name: string; icon: LucideIcon };
  active: boolean;
  onClick: () => void;
}

export default function SidebarItem({ item, active, onClick }: SidebarItemProps) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
      }`}
    >
      <Icon className={`h-5 w-5 ${active ? "text-blue-600 dark:text-blue-400" : ""}`} />
      {item.name}
    </button>
  );
}

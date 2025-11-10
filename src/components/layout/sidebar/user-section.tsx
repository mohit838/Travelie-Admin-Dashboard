import { LogOut } from "lucide-react";

export default function UserSection() {
  const handleLogout = () => console.warn("Logging out...");

  return (
    <div className="border-t border-gray-200 p-3 dark:border-gray-700">
      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
  );
}

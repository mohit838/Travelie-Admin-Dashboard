import { User } from "lucide-react";

export default function UserMenu() {
  return (
    <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
        <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      </div>
      <span className="hidden text-sm font-medium text-gray-700 sm:block dark:text-gray-200">
        Admin
      </span>
    </button>
  );
}

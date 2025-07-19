import { Avatar } from "@/components/ui/avatar"; // shadcn/ui avatar
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
export function UserMenu() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Avatar>
        <img src="https://i.pravatar.cc/40" alt="User avatar" />
      </Avatar>
      <span className="font-medium text-gray-700 dark:text-gray-200">Jane Doe</span>
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="ml-2"
      >
        {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
      {/* Add dropdown for profile/logout as needed */}
    </div>
  )
}
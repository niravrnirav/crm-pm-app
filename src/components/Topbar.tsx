import { UserMenu } from "./UserMenu";
export function Topbar() {
  return (
    <header
      className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8"
    >
      {/* Could add breadcrumbs, search, notifications, etc. */}
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Dashboard
      </div>
      <UserMenu />
    </header>
  )
}
import { UserMenu } from "./UserMenu";
export function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">
      {/* Could add breadcrumbs, search, notifications, etc. */}
      <div className="text-lg font-semibold text-gray-800">Dashboard</div>
      <UserMenu />
    </header>
  );
}
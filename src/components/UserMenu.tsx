import { Avatar } from "@/components/ui/avatar"; // shadcn/ui avatar
export function UserMenu() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Avatar>
        <img src="https://i.pravatar.cc/40" alt="User avatar" />
      </Avatar>
      <span className="font-medium text-gray-700">Jane Doe</span>
      {/* Add dropdown for profile/logout as needed */}
    </div>
  );
}
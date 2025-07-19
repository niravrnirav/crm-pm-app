import { NavItem } from "./NavItem";
import { Logo } from "./Logo";
import { Users, FileText, Briefcase, LayoutDashboard, ListTodo } from "lucide-react";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: "/contacts", label: "Contacts", icon: <Users className="w-5 h-5" /> },
  { href: "/deals", label: "Deals", icon: <FileText className="w-5 h-5" /> },
  { href: "/projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/tasks", label: "Tasks", icon: <ListTodo className="w-5 h-5" /> },
];

export function Sidebar() {
  return (
    <aside
      className="w-56 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 h-full border-r border-gray-200 dark:border-gray-700 flex flex-col gap-2 p-4"
    >
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.href} {...link} />
        ))}
      </nav>
      {/* Could add workspace switcher, help, settings, etc. */}
    </aside>
  )
}
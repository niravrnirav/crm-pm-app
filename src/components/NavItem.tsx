"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}
export function NavItem({ href, icon, label }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-colors",
        active
          ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-100"
          : "hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
      )}
      aria-current={active ? "page" : undefined}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
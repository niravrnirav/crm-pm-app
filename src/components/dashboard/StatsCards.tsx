import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Users, Handshake, Briefcase, ListTodo } from "lucide-react";

const stats = [
  {
    label: "Leads This Month",
    value: 32,
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    label: "Deals in Progress",
    value: 7,
    icon: <Handshake className="w-6 h-6 text-emerald-500" />,
  },
  {
    label: "Active Projects",
    value: 5,
    icon: <Briefcase className="w-6 h-6 text-orange-500" />,
  },
  {
    label: "My Tasks Today",
    value: 12,
    icon: <ListTodo className="w-6 h-6 text-pink-500" />,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gray-100">{stat.icon}</div>
          <div>
            <CardTitle className="text-base">{stat.label}</CardTitle>
            <CardContent className="p-0">
              <span className="text-2xl font-bold">{stat.value}</span>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
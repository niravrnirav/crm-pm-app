import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const activity = [
  { user: "Jane", action: "added new contact", time: "2h ago" },
  { user: "Mike", action: "closed deal", time: "3h ago" },
  { user: "Sarah", action: "created project", time: "4h ago" },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {activity.map((a, i) => (
            <li key={i} className="py-1 text-sm">
              <span className="font-medium">{a.user}</span> {a.action}
              <span className="text-xs text-gray-400 ml-2">{a.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
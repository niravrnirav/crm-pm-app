import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const meetings = [
  { title: "Weekly Sync", time: "Today, 2:00 PM" },
  { title: "Demo w/ Acme", time: "Tomorrow, 11:00 AM" },
];

export function UpcomingMeetings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {meetings.map((m, i) => (
            <li key={i} className="flex justify-between py-1">
              <span>{m.title}</span>
              <span className="text-xs text-gray-500">{m.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
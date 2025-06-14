import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTodo } from "lucide-react";

const tasks = [
  { task: "Call Acme Corp", done: false },
  { task: "Review proposal", done: false },
  { task: "Prepare meeting agenda", done: true },
];

export function MyTasks() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <ListTodo className="w-5 h-5 text-pink-500" />
        <CardTitle>My Tasks Today</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className="flex items-center gap-2 mb-2">
              <input type="checkbox" checked={task.done} readOnly className="accent-pink-500" />
              <span className={task.done ? "line-through text-gray-400" : ""}>{task.task}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
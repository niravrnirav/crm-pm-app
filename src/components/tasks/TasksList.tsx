import { Card } from "@/components/ui/card";
import { ListTodo } from "lucide-react";

const tasks = [
  { title: "Call Acme Corp", due: "Today", done: false },
  { title: "Review proposal", due: "Tomorrow", done: true },
];

export function TasksList() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <ListTodo className="w-5 h-5 text-pink-500" />
          <span className="font-semibold">Tasks List</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Task</th>
              <th className="py-2">Due</th>
              <th className="py-2">Done</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{t.title}</td>
                <td>{t.due}</td>
                <td>
                  <input type="checkbox" checked={t.done} readOnly className="accent-pink-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
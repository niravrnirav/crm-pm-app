import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const projects = [
  { name: "CRM Revamp", status: "In Progress", manager: "Jane Doe" },
  { name: "App Launch", status: "Planning", manager: "John Smith" },
];

export function ProjectsList() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-orange-500" />
          <span className="font-semibold">Projects List</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Project</th>
              <th className="py-2">Status</th>
              <th className="py-2">Manager</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.name} className="border-t">
                <td className="py-2">{p.name}</td>
                <td>{p.status}</td>
                <td>{p.manager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
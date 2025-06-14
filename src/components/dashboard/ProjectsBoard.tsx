import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const projects = [
  { name: "CRM Revamp", status: "In Progress" },
  { name: "Marketing Launch", status: "Review" },
  { name: "Mobile App", status: "Planning" },
];

export function ProjectsBoard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Briefcase className="w-5 h-5 text-orange-500" />
        <CardTitle>My Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.name} className="flex justify-between items-center">
              <span>{project.name}</span>
              <span className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700">
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
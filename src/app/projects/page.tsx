import { ProjectsList } from "@/components/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <ProjectsList />
    </section>
  );
}
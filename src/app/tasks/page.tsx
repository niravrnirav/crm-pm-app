import { TasksList } from "@/components/tasks/TasksList";

export default function TasksPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <TasksList />
    </section>
  );
}
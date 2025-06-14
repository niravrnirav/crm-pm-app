import { StatsCards } from "@/components/dashboard/StatsCards";
import { SalesPipeline } from "@/components/dashboard/SalesPipeline";
import { ProjectsBoard } from "@/components/dashboard/ProjectsBoard";
import { MyTasks } from "@/components/dashboard/MyTasks";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { UpcomingMeetings } from "@/components/dashboard/UpcomingMeetings";

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsCards />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SalesPipeline />
        <ProjectsBoard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MyTasks />
        <UpcomingMeetings />
      </div>
      <ActivityFeed />
    </section>
  );
}
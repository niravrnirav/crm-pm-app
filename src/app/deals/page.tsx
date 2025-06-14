import { DealsList } from "@/components/deals/DealsList";

export default function DealsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Deals</h1>
      <DealsList />
    </section>
  );
}
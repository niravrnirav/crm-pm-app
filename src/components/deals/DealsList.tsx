import { Card } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const deals = [
  { name: "Big Contract", company: "Acme Corp", stage: "Proposal", value: "$15,000" },
  { name: "Beta Renewal", company: "Beta Inc", stage: "Negotiation", value: "$8,000" },
];

export function DealsList() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Handshake className="w-5 h-5 text-emerald-500" />
          <span className="font-semibold">Deals List</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Deal</th>
              <th className="py-2">Company</th>
              <th className="py-2">Stage</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((d) => (
              <tr key={d.name} className="border-t">
                <td className="py-2">{d.name}</td>
                <td>{d.company}</td>
                <td>{d.stage}</td>
                <td>{d.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const pipelineStages = [
  { stage: "Lead", count: 8 },
  { stage: "Qualified", count: 5 },
  { stage: "Proposal", count: 2 },
  { stage: "Negotiation", count: 1 },
];

export function SalesPipeline() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Handshake className="w-5 h-5 text-emerald-500" />
        <CardTitle>Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          {pipelineStages.map((stage) => (
            <div key={stage.stage} className="flex flex-col items-center">
              <span className="text-lg font-semibold">{stage.count}</span>
              <span className="text-xs text-gray-500">{stage.stage}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
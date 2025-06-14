import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const contacts = [
  { name: "Jane Doe", company: "Acme Corp", email: "jane@acme.com" },
  { name: "John Smith", company: "Beta Inc", email: "john@beta.com" },
];

export function ContactsList() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-500" />
          <span className="font-semibold">Contact List</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Company</th>
              <th className="py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.email} className="border-t">
                <td className="py-2">{c.name}</td>
                <td>{c.company}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
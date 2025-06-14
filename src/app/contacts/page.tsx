import { ContactsList } from "@/components/contacts/ContactsList";

export default function ContactsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>
      <ContactsList />
    </section>
  );
}
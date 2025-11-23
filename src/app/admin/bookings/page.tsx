// For testing only (remove in production)
import fs from "fs";
import path from "path";

export default async function BookingsPage() {
  const filePath = path.join(process.cwd(), "data", "bookings.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const bookings = JSON.parse(jsonData);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Bookings ({bookings.length})</h1>
      {bookings.map((b: any) => (
        <div key={b.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <p><strong>{b.fullName}</strong> – {b.phone}</p>
          <p>{b.email} • {b.guests} guests • {b.travelDate}</p>
          <p className="text-sm text-gray-500">{new Date(b.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
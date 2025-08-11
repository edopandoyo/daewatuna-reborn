import LogoutButton from "@/components/LogoutButton";
import { requireUser } from "@/lib/appwrite/server";

export default async function DashboardPage() {
  const user = await requireUser(); // redirect /login jika tidak ada
  return (
    <div>
      <h1>Hi, {user.name || user.email}</h1>

      <LogoutButton />
    </div>
  );
}

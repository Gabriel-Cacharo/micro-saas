import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl font-bold">Protected Dashboard</h1>
      <p>
        {session?.user?.email ? session?.user?.email : "Usuário não logado"}
      </p>

      {session?.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="border rounded-md px-2 cursor-pointer"
          >
            Logout
          </button>
        </form>
      )}

      <Link href="/payments">Pagamentos</Link>
    </div>
  );
}

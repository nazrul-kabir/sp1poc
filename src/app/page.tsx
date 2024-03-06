import { getServerSession } from "next-auth";
import SignIn from "@/components/pages/signin";
import Dashboard from "@/components/pages/dashboard";

export default async function Home() {
  const session = await getServerSession();
  
  return (
    <div>
      {!session ? (
        <SignIn />
      ) : (
        <Dashboard user={{...session?.user}} />
      )}
    </div>
  );
}

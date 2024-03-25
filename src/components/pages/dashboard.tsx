"use client";
import { User } from "@/models/User";
import { Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Dashboard({ user }: { user: User }) {
  const router = useRouter();

  return (
    <div className="flex flex-col px-6 py-4 justify-center items-center">
      <h4>Hello, {user?.name}!</h4>

      <div className="my-8">
        <h3 className="mb-6 text-center">Use Cases</h3>

        <div className="grid grid-flow-row gap-4">
          <Button
            href="/use-case-1"
            as={Link}
            variant="ghost"
            size="lg"
            className="py-8 font-medium text-lg"
          >
            Use Case 1 - Client Prospecting
          </Button>

          {/* <Button
            href="/use-case-2"
            as={Link}
            variant="ghost"
            size="lg"
            className="py-8 font-medium text-lg"
          >
            Use Case 2 - Corporate Banking
          </Button>

          <Button
            href="/use-case-3"
            as={Link}
            variant="ghost"
            size="lg"
            className="py-8 font-medium text-lg"
          >
            Use Case 3 - GB Risk
          </Button> */}
        </div>
      </div>
    </div>
  );
}

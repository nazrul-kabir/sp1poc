"use client";
import { signOut } from "next-auth/react";
import { Button, Link } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="sticky h-20 w-full top-0 left-0 right-0 z-50 bg-transparent px-6 py-4 flex justify-between items-center">
      <div>
        <Link href="/">
          <img src="maybank-logo.svg" className="w-40" />
        </Link>
      </div>
      <div>
        <Button variant="solid" size="sm" className="font-medium" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col px-6 py-4 justify-center items-center">
      <div className="p-12 border-2 rounded-lg flex flex-col items-center">
        <img src="maybank-logo.svg" className="w-40 mb-4" />
        <h3 className="mb-8">Maybank GenAI POC</h3>
        <Button
          color="primary"
          variant="solid"
          onClick={() => signIn("azure-ad")}
        >
          Sign In with Azure AD
        </Button>
      </div>
    </div>
  );
}

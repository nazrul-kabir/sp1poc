"use client";
import { Button, Link } from "@nextui-org/react";

export default function UseCase2() {
  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/" color="foreground">Back to home</Link>
      </div>

      <h2>Use Case 2 - Corporate Banking</h2>

      <div className="w-full md:w-1/3 py-4 grid grid-cols gap-4">
        <Button as={Link} href="/use-case-2/origination" variant="ghost" size="lg" className="py-8 font-medium text-lg">Origination</Button>
        <Button as={Link} href="/use-case-2/esg-assessment" variant="ghost" size="lg" className="py-8 font-medium text-lg">ESG Assessment</Button>
      </div>
    </div>
  );
}

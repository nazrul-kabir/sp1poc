"use client";
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Link } from "@nextui-org/react";

const options = [
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

export default function UseCase2EsgChecklist() {
  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/" color="foreground">Back to home</Link>
      </div>

      <h2>Use Case 2 - ESG Assessment</h2>

      <div className="w-full md:w-1/2 py-4">
        <div className="pb-4">
          <Select
            items={options}
            label="Client name"
            labelPlacement="outside"
            placeholder="Select a client name"
            variant="bordered"
          >
            {(option) => (
              <SelectItem key={option.value}>{option.key}</SelectItem>
            )}
          </Select>
        </div>

        <div className="pb-4">
          <Select
            items={options}
            label="Industry"
            labelPlacement="outside"
            placeholder="Select client industry"
            variant="bordered"
          >
            {(option) => (
              <SelectItem key={option.value}>{option.key}</SelectItem>
            )}
          </Select>
        </div>

        <div className="pb-4">
          <p className="text-small mb-2">ESG reports (PDF format)</p>
          <Input type="file" accept=".pdf" variant="bordered" multiple></Input>
        </div>

        <Button as={Link} href="/use-case-2/esg-assessment/output" color="primary">Proceed</Button>
      </div>
    </div>
  );
}

"use client";
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Link } from "@nextui-org/react";

const options = [
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const prospectOptions = [
  { key: "001", value: "Eco World Development Group Berhad" },
  { key: "002", value: "TotalEnergies SE" },
  { key: "003", value: "TDM Bhd" },
  { key: "004", value: "UOA Group" },
  { key: "005", value: "Velesto Energy Berhad" },
  { key: "006", value: "IOI Group Berhad" },
  { key: "007", value: "Mudajaya Group Berhad" },
  { key: "008", value: "Citaglobal Bhd" },
  { key: "009", value: "TH Plantations Berhad" },
];

export default function UseCase1() {
  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/" color="foreground">Back to home</Link>
      </div>

      <h2>Use Case 1 - Client Coverage</h2>

      <div className="w-full md:w-1/2 py-4">
        <div className="pb-4">
          <Select
            items={prospectOptions}
            label="Prospect"
            labelPlacement="outside"
            placeholder="Select a client name"
            variant="bordered"
          >
            {(option) => (
              <SelectItem key={option.key}>{option.value}</SelectItem>
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
          <CheckboxGroup
            label="Analysis"
          >
            <Checkbox value="industry-analysis">Industry Analysis</Checkbox>
            <Checkbox value="prospect-maturation">Product Maturation</Checkbox>
            <Checkbox value="product-suggestion">Product Suggestion</Checkbox>
            <Checkbox value="indicative-term-sheet">Indicative Term Sheet</Checkbox>
            <Checkbox value="suggested-pricing-level">Suggested Pricing Level</Checkbox>
          </CheckboxGroup>
        </div>

        <div className="pb-4">
          <p className="text-small mb-2">Upload additional documents (PDF format)</p>
          <Input type="file" accept=".pdf" variant="bordered" multiple></Input>
        </div>

        <Button as={Link} href="/use-case-1/output" color="primary">Proceed</Button>
      </div>
    </div>
  );
}

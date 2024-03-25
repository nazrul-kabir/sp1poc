"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Link } from "@nextui-org/react";

const options = [
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const clientOptions = [
  { key: "001", value: "Eco World Development Group Berhad" },
  { key: "002", value: "TotalEnergies SE" },
  { key: "003", value: "TDM Bhd" },
  { key: "004", value: "UOA Group" },
  { key: "005", value: "Velesto Energy Berhad" },
  { key: "006", value: "IOI Group Berhad" },
  { key: "007", value: "Mudajaya Group Berhad" },
  { key: "008", value: "Citaglobal Bhd" },
  { key: "009", value: "TH Plantations Berhad" },
  { key: "010", value: "Deleum Berhad" },
  { key: "011", value: "Spritzer Berhad" },
  { key: "012", value: "NTPB Holdings Berhad (Nibong tebal paper mils)" },
  { key: "013", value: "HeiTech Padu Berhad" },
];

const industryOptions = {
  '001': [
    { key: '1', value: 'Property Development' },
  ],
  '002': [
    { key: '1', value: 'Energy' },
  ],
  '003': [
    { key: '1', value: 'Plantation' },
  ],
  '004': [
    { key: '1', value: 'Property Development' },
  ],
  '005': [
    { key: '1', value: 'Oil & Gas' },
  ],
  '006': [
    { key: '1', value: 'Plantation' },
  ],
  '007': [
    { key: '1', value: 'Construction' },
  ],
  '008': [
    { key: '1', value: 'Construction' },
  ],
  '009': [
    { key: '1', value: 'Plantation' },
  ],
  '010': [
    { key: '1', value: 'Oil & Gas' },
  ],
  '011': [
    { key: '1', value: 'Manufacturing and Distribution of Bottled Water' },
  ],
  '012': [
    { key: '1', value: 'Multinational Pulp and Paper Manufacturer' },
  ],
  '013': [
    { key: '1', value: 'Tech Manufacturer' },
  ],
}

export default function UseCase2EsgChecklist() {
  const [prospectFieldValue, setProspectFieldValue] = useState<string>('');
  const [industryFieldValue, setIndustryFieldValue] = useState<string>('');

  const handleProspectFieldChange = (e: any) => {
    setProspectFieldValue(e.target.value);
    setIndustryFieldValue('');
  };

  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/" color="foreground">Back to home</Link>
      </div>

      <h2>Use Case 2 - ESG Assessment</h2>

      <div className="w-full md:w-1/2 py-4">
        <div className="pb-4">
          <Select
            items={clientOptions}
            label="Client name"
            labelPlacement="outside"
            placeholder="Select a client name"
            variant="bordered"
            onChange={handleProspectFieldChange}
          >
            {(option) => (
              <SelectItem key={option.key} value={option.key}>{option.value}</SelectItem>
            )}
          </Select>
        </div>

        <div className="pb-4">
          <Select
            items={industryOptions[prospectFieldValue as keyof typeof industryOptions] || []}
            label="Industry"
            labelPlacement="outside"
            placeholder="Select client industry"
            variant="bordered"
          >
            {(option) => (
              <SelectItem key={option.key} value={option.key}>{option.value}</SelectItem>
            )}
          </Select>
        </div>

        {/* <div className="pb-4">
          <p className="text-small mb-2">ESG reports (PDF format)</p>
          <Input type="file" accept=".pdf" variant="bordered" multiple></Input>
        </div> */}

        <Button as={Link} href="/use-case-2/esg-assessment/output" color="primary">Proceed</Button>
      </div>
    </div>
  );
}

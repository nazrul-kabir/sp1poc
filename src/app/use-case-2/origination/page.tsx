"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Link } from "@nextui-org/react";

const options = [
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const clientOptions = [
  { key: '001', value: 'KERTIH TERMINALS SDN. BHD.' },
  { key: '002', value: 'DAGANG NEXCHANGE BERHAD' },
  { key: '003', value: 'MARDEC PROCESSING SDN BHD' },
  { key: '004', value: 'Gabungan AQRS Berhad' },
  { key: '005', value: 'Sime Darby Motors Sdn Bhd' },
  { key: '006', value: 'Lembaga Hasil Dalam Negeri' },
  { key: '007', value: 'Prasarana Malaysia Berhad' },
  { key: '008', value: 'Sime Darby Plantation Berhad' },
  { key: '009', value: 'Chemical Industries (Far East) Pte Ltd' },
  { key: '010', value: 'Shenzhen Senior Technology Material Co Ltd' },
];

/**
 * 
 * KERTIH TERMINALS SDN. BHD.				Oil & Gas
    DAGANG NEXCHANGE BERHAD					Technology
    MARDEC PROCESSING SDN BHD				Manufacturing
    Gabungan AQRS Berhad					Construction	
    Sime Darby Motors Sdn Bhd 				Automotive
    Lembaga Hasil Dalam Negeri 				Public Sector
    Prasarana Malaysia Berhad 				Transportation
    Sime Darby Plantation Berhad			Plantation
    Chemical Industries (Far East) Pte Ltd	Manufacturing
    Shenzhen Senior Technology Material Co Ltd	Manufacturing
 */

// const industryOptions = {
//   '001': ['Oil & Gas'],
//   '002': ['Technology'],
//   '003': ['Manufacturing'],
//   '004': ['Construction'],
//   '005': ['Automotive'],
//   '006': ['Public Sector'],
//   '007': ['Transportation'],
//   '008': ['Plantation'],
//   '009': ['Manufacturing'],
//   '010': ['Manufacturing'],
// }

const industryOptions = {
  '001': [
    { key: '1', value: 'Oil & Gas' }
  ],
  '002': [
    { key: '1', value: 'Technology' }
  ],
  '003': [
    { key: '1', value: 'Manufacturing' }
  ],
  '004': [
    { key: '1', value: 'Construction' }
  ],
  '005': [
    { key: '1', value: 'Automotive' }
  ],
  '006': [
    { key: '1', value: 'Public Sector' }
  ],
  '007': [
    { key: '1', value: 'Transportation' }
  ],
  '008': [
    { key: '1', value: 'Plantation' }
  ],
  '009': [
    { key: '1', value: 'Manufacturing' }
  ],
  '010': [
    { key: '1', value: 'Manufacturing' }
  ],
}
  
export default function UseCase2Origination() {
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

      <h2>Use Case 2 - Origination</h2>

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

        {/* <div className="pb-4">
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
        </div> */}

        {/* <div className="pb-4">
          <p className="text-small mb-2">Published reports to analyse (PDF format)</p>
          <Input type="file" accept=".pdf" variant="bordered" multiple></Input>
        </div> */}

        <Button as={Link} href="/use-case-2/origination/output" color="primary">Proceed</Button>
      </div>
    </div>
  );
}

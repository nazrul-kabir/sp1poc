"use client";
import React, { useState } from 'react';
import { Input, Select, SelectItem, CheckboxGroup, Checkbox, Button, Link, Spinner } from "@nextui-org/react";
import { PromptFlowUc1 } from '@/features/prompt-flow/prompt-flow-uc1';
import { useRouter } from 'next/navigation';

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
  'Eco World Development Group Berhad': [
    { key: 'Property Development', value: 'Property Development' },
  ],
  'TotalEnergies SE': [
    { key: 'Energy', value: 'Energy' },
  ],
  'TDM Bhd': [
    { key: 'Plantation', value: 'Plantation' },
  ],
  'UOA Group': [
    { key: 'Property Development', value: 'Property Development' },
  ],
  'Velesto Energy Berhad': [
    { key: 'Oil & Gas', value: 'Oil & Gas' },
  ],
  'IOI Group Berhad': [
    { key: 'Plantation', value: 'Plantation' },
  ],
  'Mudajaya Group Berhad': [
    { key: 'Construction', value: 'Construction' },
  ],
  'Citaglobal Bhd': [
    { key: 'Construction', value: 'Construction' },
  ],
  'TH Plantations Berhad': [
    { key: 'Plantation', value: 'Plantation' },
  ],
  'Deleum Berhad': [
    { key: 'Oil & Gas', value: 'Oil & Gas' },
  ],
  'Spritzer Berhad': [
    { key: 'Manufacturing and Distribution of Bottled Water', value: 'Manufacturing and Distribution of Bottled Water' },
  ],
  'NTPB Holdings Berhad (Nibong tebal paper mils)': [
    { key: 'Multinational Pulp and Paper Manufacturer', value: 'Multinational Pulp and Paper Manufacturer' },
  ],
  'HeiTech Padu Berhad': [
    { key: 'Tech Manufacturer', value: 'Tech Manufacturer' },
  ],
}

export default function UseCase1() {
  const [prospectFieldValue, setProspectFieldValue] = useState<string>('');
  const [industryFieldValue, setIndustryFieldValue] = useState<string>('');
  const [analysisFieldValue, setAnalysisFieldValue] = useState<string[]>(['company_analysis']);

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  window.localStorage.removeItem('uc1_data_output');

  const handleProspectFieldChange = (e: any) => {
    setProspectFieldValue(e.target.value);
    setIndustryFieldValue('');
  };

  const handleIndustryFieldChange = (e: any) => {
    setIndustryFieldValue(e.target.value);
  };

  const handleProceedBtn = async () => {
    setLoading(true);

    const input = {
      "client_name": prospectFieldValue,
      "industry": industryFieldValue,
    };

    const analysis = {
      "analysis": analysisFieldValue,
    };

    const data = await PromptFlowUc1(input?.client_name, input?.industry);

    if (data) {
      window.localStorage.setItem('uc1_data_output', JSON.stringify(data));
      window.localStorage.setItem('uc1_analysis_input', JSON.stringify(analysis));
      router.push('/use-case-1/output');
    }
    else {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/" color="foreground">Back to home</Link>
      </div>

      <h2>Use Case 1 - Client Prospecting</h2>

      <div className="w-full md:w-1/2 py-4">
        <div className="pb-4">
          <Select
            items={clientOptions}
            label="Prospect"
            labelPlacement="outside"
            placeholder="Select a client name"
            variant="bordered"
            onChange={handleProspectFieldChange}
            isDisabled={isLoading}
          >
            {(option) => (
              <SelectItem key={option.value} value={option.key}>{option.value}</SelectItem>
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
            onChange={handleIndustryFieldChange}
            isDisabled={isLoading}
          >
            {(option) => (
              <SelectItem key={option.value} value={option.key}>{option.value}</SelectItem>
            )}
          </Select>
        </div>

        <div className="pb-4">
          <CheckboxGroup
            label="Analysis"
            value={analysisFieldValue}
            onValueChange={setAnalysisFieldValue}
            isDisabled={isLoading}
          >
            <Checkbox value="company_analysis" isReadOnly>Company Analysis</Checkbox>
            <Checkbox value="industry_analysis">Industry Analysis</Checkbox>
            <Checkbox value="financial_analysis">Financial Analysis</Checkbox>
            {/* <Checkbox value="prospect_maturation">Product Maturation</Checkbox> */}
            <Checkbox value="product_suggestion">Product Suggestion</Checkbox>
            {/* <Checkbox value="indicative_term_sheet">Indicative Term Sheet</Checkbox> */}
            {/* <Checkbox value="suggested_pricing_level">Suggested Pricing Level</Checkbox> */}
          </CheckboxGroup>
        </div>

        {/* <div className="pb-4">
          <p className="text-small mb-2">Upload additional documents (PDF format)</p>
          <Input type="file" accept=".pdf" variant="bordered" multiple></Input>
        </div> */}

        {!isLoading ? (
          <Button color="primary" onClick={handleProceedBtn} isDisabled={prospectFieldValue == '' || industryFieldValue == ''}>Proceed</Button>
        ) : (
          <Button color="primary" isDisabled>
            <Spinner color="default" size="sm" />
            Generating, please wait...
          </Button>
        )}
        
      </div>
    </div>
  );
}

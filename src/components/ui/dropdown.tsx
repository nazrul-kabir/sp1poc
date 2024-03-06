"use client";
import React, { useState } from "react";

interface DropdownProps {
  label: string;
  name?: string;
  placeholder?: string;
  options: { key: string; value: string }[];
  onSelect: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name = "dropdown",
  placeholder = "Select an option",
  options,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 font-semibold"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={selectedValue || ""}
        onChange={handleSelect}
        className="w-full mt-1 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

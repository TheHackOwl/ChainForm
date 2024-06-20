import React from "react";
import { Input } from "@nextui-org/input";
interface FixedIncentiveInputProps {
  value: string;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

export const FixedIncentiveInput: React.FC<FixedIncentiveInputProps> = ({
  value,
  isDisabled,
  onChange,
}) => {
  const handleNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);

    if (isNaN(newValue) || newValue <= 0) return;
    onChange(newValue.toString());
  };

  return (
    <div>
      <Input
        isRequired
        color="primary"
        isDisabled={isDisabled}
        label="Number of users"
        placeholder="Enter the number of users"
        type="number"
        value={value}
        variant="underlined"
        onChange={handleNChange}
      />
    </div>
  );
};

import React from "react";
import { Input } from "@nextui-org/input";
interface PersonNumberInputProps {
  value: string;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

export const PersonNumberInput: React.FC<PersonNumberInputProps> = ({
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
    <Input
      isRequired
      color="primary"
      isDisabled={isDisabled}
      label="Number of person"
      placeholder="Enter the number of person"
      type="number"
      value={value}
      variant="underlined"
      onChange={handleNChange}
    />
  );
};

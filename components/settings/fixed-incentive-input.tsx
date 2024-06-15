import React, { useState } from "react";
import { Input } from "@nextui-org/input";
interface FixedIncentiveInputProps {
  onChange: (value: number) => void;
}

export const FixedIncentiveInput: React.FC<FixedIncentiveInputProps> = ({
  onChange,
}) => {
  const [nValue, setNValue] = useState<number>(10);

  const handleNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);

    if (isNaN(newValue) || newValue <= 0) return;
    setNValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <Input
        isRequired
        color="primary"
        label="Number of users"
        placeholder="Enter the number of users"
        type="number"
        value={nValue.toString()}
        variant="underlined"
        onChange={handleNChange}
      />
    </div>
  );
};

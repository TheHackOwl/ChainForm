import React from "react";
import { Input } from "@nextui-org/input";

interface RateInputProps {
  value: string;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

export const RateInput: React.FC<RateInputProps> = ({
  value,
  isDisabled,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      isRequired
      color="primary"
      isDisabled={isDisabled}
      label="Reward rate"
      max={100}
      min={0}
      placeholder="Winning Rate, between 0-100"
      type="number"
      value={value}
      variant="underlined"
      onChange={handleChange}
    />
  );
};

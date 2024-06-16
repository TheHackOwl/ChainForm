import { Input } from "@nextui-org/input";
import { useState } from "react";

type ValidationError = string | string[];

interface EthInputProps {
  onChange: (value: string) => void;
}

export const EthInput: React.FC<EthInputProps> = ({ onChange }) => {
  const [ethAmount, setEthAmount] = useState<string>("0");

  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setEthAmount(newValue);
    onChange(newValue);
  };

  const validate = (val: string): ValidationError | true | null | undefined => {
    return true;
  };

  return (
    <Input
      isRequired
      color="primary"
      label="Total ETH"
      placeholder="Enter total ETH amount"
      step="0.0000001"
      type="number"
      validate={validate}
      value={ethAmount}
      variant="underlined"
      onChange={handleEthChange}
    />
  );
};

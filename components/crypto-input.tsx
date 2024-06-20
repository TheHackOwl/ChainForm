import React, { useMemo } from "react";
import { Input, InputProps } from "@nextui-org/input";
interface CryptoInputProps extends InputProps {
  value: string;
  disabled?: boolean;
  decimalPlaces?: number;
  onValueChange: (value: string) => void;
}

export const CryptoInput: React.FC<CryptoInputProps> = (props) => {
  const { disabled = false, decimalPlaces = 18, onValueChange } = props;

  const regex = useMemo(() => {
    const regexPattern = `^\\D*(\\d*(?:\\.\\d{0,${decimalPlaces}})?).*?$`;
    const regex = new RegExp(regexPattern);

    return regex;
  }, [decimalPlaces]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(regex, "$1");

    onValueChange(value);
  };

  return <Input {...props} disabled={disabled} onChange={handleChange} />;
};

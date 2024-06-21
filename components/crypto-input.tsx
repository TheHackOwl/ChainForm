import React, { useMemo } from "react";
import { Input, InputProps } from "@nextui-org/input";
interface CryptoInputProps extends InputProps {
  value: string;
  disabled?: boolean;
  allowEmpty?: boolean;
  decimalPlaces?: number;
  onValueChange: (value: string) => void;
}

export const CryptoInput: React.FC<CryptoInputProps> = (props) => {
  const {
    disabled = false,
    decimalPlaces = 18,
    allowEmpty = true,
    onValueChange,
  } = props;

  const regex = useMemo(() => {
    const regexPattern = `^\\D*(\\d*(?:\\.\\d{0,${decimalPlaces}})?).*?$`;
    const regex = new RegExp(regexPattern);

    return regex;
  }, [decimalPlaces]);

  const handleChange = (value: string) => {
    if ((!allowEmpty && value === "") || value === undefined) return;

    value = value.replace(regex, "$1");

    onValueChange(value);
  };

  return <Input {...props} disabled={disabled} onValueChange={handleChange} />;
};

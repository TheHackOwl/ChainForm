import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";

export type IncentiveType = "fixed" | "random" | "manual";

interface IncentiveSelectorProps {
  value: IncentiveType;
  onChange: (value: IncentiveType) => void;
}

const incentiveOptions = [
  {
    key: "fixed",
    label: "Fixed Incentive",
    description:
      "The first n users who submit the questionnaire will each receive a fixed incentive, which is distributed upon completion.",
  },
  {
    key: "random",
    label: "Random Incentive",
    description:
      "Each user who submits the questionnaire has a chance to receive a random incentive, distributed upon completion until all incentives are given out.",
  },
  {
    key: "manual",
    label: "Manual Incentive",
    description:
      "The initiator designates the winning users. The incentives are distributed manually by the initiator after the questionnaire ends.",
  },
];

export const IncentiveSelector: React.FC<IncentiveSelectorProps> = ({
  value,
  onChange,
}) => {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const option = incentiveOptions.find((item) => item.key === value);

    setDescription(option?.description || "");
  }, [value]);

  return (
    <Select
      className="max-w-xs"
      description={description}
      isRequired={true}
      label="Select Incentive Type"
      placeholder="Please select..."
      selectedKeys={[value]}
      onChange={(e) => onChange(e.target.value as IncentiveType)}
    >
      {incentiveOptions.map((item) => {
        return <SelectItem key={item.key}>{item.label}</SelectItem>;
      })}
    </Select>
  );
};

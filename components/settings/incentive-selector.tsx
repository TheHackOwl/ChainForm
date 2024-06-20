import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

import { RewardOption, RewardArgsNumberType } from "./hooks/useRewardOptions";

interface IncentiveSelectorProps {
  rewardOptions: RewardOption[];
  isDisabled?: boolean;
  value: number;
  description: string;
  onChange: (value: RewardArgsNumberType) => void;
}

export const IncentiveSelector: React.FC<IncentiveSelectorProps> = ({
  value,
  rewardOptions,
  isDisabled,
  description,
  onChange,
}) => {
  return (
    <Select
      className="max-w-xs"
      description={description}
      isDisabled={isDisabled}
      isRequired={true}
      label="Select Reward Type"
      placeholder="Please select..."
      selectedKeys={[value.toString()]}
      onChange={(e) => onChange(Number(e.target.value) as RewardArgsNumberType)}
    >
      {rewardOptions.map((item) => {
        return (
          <SelectItem key={item.argsNumber.toString()}>{item.name}</SelectItem>
        );
      })}
    </Select>
  );
};

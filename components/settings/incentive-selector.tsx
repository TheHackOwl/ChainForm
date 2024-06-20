import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { useReadContract } from "wagmi";

import { REGISTRY_ABI, REGISTRY_ADDRESS } from "@/constants/contract/registry";
// import {
//   FIXEDREWARD_ABI,
//   FIXEDREWARD_ADDRESS,
// } from "@/constants/contract/fixedReward";
export type IncentiveType = "fixed" | "random" | "manual";

interface IncentiveSelectorProps {
  isDisabled?: boolean;
  value: IncentiveType;
  onChange: (value: IncentiveType) => void;
}

const incentiveOptions = [
  {
    key: "fixed",
    label: "Fixed",
    description:
      "The first n users who submit the questionnaire will each receive a fixed incentive, which is distributed upon completion.",
  },
  {
    key: "random",
    label: "Random",
    description:
      "Each user who submits the questionnaire has a chance to receive a random incentive, distributed upon completion until all incentives are given out.",
  },
  {
    key: "manual",
    label: "Manual",
    description:
      "The initiator designates the winning users. The incentives are distributed manually by the initiator after the questionnaire ends.",
  },
];

export const IncentiveSelector: React.FC<IncentiveSelectorProps> = ({
  value,
  isDisabled,
  onChange,
}) => {
  const { data } = useReadContract({
    abi: REGISTRY_ABI,
    address: REGISTRY_ADDRESS,
    functionName: "getRewardContracts",
  });

  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const option = incentiveOptions.find((item) => item.key === value);

    setDescription(option?.description || "");
  }, [value]);

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <Select
      className="max-w-xs"
      description={description}
      isDisabled={isDisabled}
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

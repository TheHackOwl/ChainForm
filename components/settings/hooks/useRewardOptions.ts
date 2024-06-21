import { useEffect, useState } from "react";
import { useReadContract, useConfig } from "wagmi";
import { readContracts } from "@wagmi/core";

import { REGISTRY_ABI, REGISTRY_ADDRESS } from "@/constants/contract/registry";
import { REWARD_ABI } from "@/constants/contract/IRewardLogic";

export type RewardArgsNumberType = 2 | 3;

export interface RewardOption {
  address: `0x${string}`;
  argsDescription: string[];
  argsNumber: number;
  description: string;
  name: string;
}

export interface useRewardOptionsReturn {
  rewardOptions: RewardOption[];
  description: string;
  selectedRewardType: RewardArgsNumberType;
  setSelectedRewardType: (type: RewardArgsNumberType) => void;
}
export const useRewardOptions = (
  initType: RewardArgsNumberType,
  setRewardLogic: (address: `0x${string}`) => void,
): useRewardOptionsReturn => {
  const config = useConfig();
  const { data, isLoading } = useReadContract({
    abi: REGISTRY_ABI,
    address: REGISTRY_ADDRESS,
    functionName: "getRewardContracts",
  });
  const [selectedRewardType, setSelectedRewardType] =
    useState<RewardArgsNumberType>(initType);
  const [rewardOptions, setRewardOptions] = useState<RewardOption[]>([]);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (!isLoading && data) {
      initializeOptions(data as `0x${string}`[]);
    }
  }, [isLoading, data]);

  useEffect(() => {
    const option = rewardOptions.find(
      (item) => item.argsNumber === selectedRewardType,
    );

    setDescription(option?.description || "");
    if (option) {
      setRewardLogic(option.address);
    }
  }, [selectedRewardType]);

  const setSelectedRewardTypeProxy = (val: RewardArgsNumberType) => {
    if (!val) return;
    setSelectedRewardType(val);
  };

  const initializeOptions = async (addressList: `0x${string}`[]) => {
    if (addressList.length === 0) return;
    const cintracts = addressList.map((item) => ({
      address: item,
      abi: REWARD_ABI,
      functionName: "getMetaData",
    }));
    const rewardOptions = await readContracts(config, {
      contracts: cintracts,
    });

    setRewardOptions(() => {
      return rewardOptions.map((item, index) => {
        const { name, argsDescription, argsNumber, description } = item.result!;

        return {
          address: addressList[index],
          argsDescription: argsDescription,
          argsNumber: argsNumber,
          description: description,
          name: name,
        } as RewardOption;
      });
    });

    if (rewardOptions.length > 0) {
      const result = rewardOptions[0].result;

      setRewardLogic(addressList[0]);
      // setSelectedRewardType(result?.argsNumber as RewardArgsNumberType);
      setDescription(result?.description || "");
    }
  };

  return {
    rewardOptions,
    description,
    selectedRewardType,
    setSelectedRewardType: setSelectedRewardTypeProxy,
  };
};

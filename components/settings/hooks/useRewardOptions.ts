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
  contractAddress: string;
  setSelectedRewardType: (type: RewardArgsNumberType) => void;
}
export const useRewardOptions = (
  initType: RewardArgsNumberType,
  setRewardLogic: (address: `0x${string}`) => void,
): useRewardOptionsReturn => {
  const config = useConfig();
  // 获取奖励合约地址
  const { data, isLoading } = useReadContract({
    abi: REGISTRY_ABI,
    address: REGISTRY_ADDRESS,
    functionName: "getRewardContracts",
  });

  const [selectedRewardType, setSelectedRewardType] =
    useState<RewardArgsNumberType>(initType);
  const [rewardOptions, setRewardOptions] = useState<RewardOption[]>([]);
  const [description, setDescription] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");

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
      setContractAddress(option.address);
    }
  }, [selectedRewardType]);

  const setSelectedRewardTypeProxy = (val: RewardArgsNumberType) => {
    if (val == undefined || val == null) return;
    setSelectedRewardType(val);
  };

  const initializeOptions = async (addressList: `0x${string}`[]) => {
    if (addressList.length === 0) return;

    // 根据奖励合约地址，获取奖励合约的meta
    const cintracts = addressList.map((item) => ({
      address: item,
      abi: REWARD_ABI,
      functionName: "getMetaData",
    }));
    const rewardOptions = await readContracts(config, {
      contracts: cintracts,
    });

    setRewardOptions(() => {
      const options = rewardOptions.map((item, index) => {
        const { name, argsDescription, argsNumber, description } = item.result!;

        return {
          address: addressList[index],
          argsDescription: argsDescription,
          argsNumber: argsNumber,
          description: description,
          name: name,
        } as RewardOption;
      });

      options.push({
        address: "0x",
        argsDescription: [],
        argsNumber: 0,
        description: "None",
        name: "No reward",
      });

      return options;
    });

    if (rewardOptions.length > 0) {
      const result = rewardOptions[0].result;

      setContractAddress(addressList[0]);
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
    contractAddress,
  };
};

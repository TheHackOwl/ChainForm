import React, { useEffect } from "react";
import { useReadContract } from "wagmi";
import { formatEther } from "viem";

import {
  CHAINFORM_ADDRESS,
  CHAINFORM_ABI,
} from "@/constants/contract/chainForm";
import { MY_TOKNE_ADDRESS } from "@/constants/contract/myToken";
interface RewardBalanceProps {}

export const RewardBalance: React.FC<RewardBalanceProps> = () => {
  const { data, isLoading } = useReadContract({
    address: CHAINFORM_ADDRESS,
    abi: CHAINFORM_ABI,
    functionName: "getRewards",
    args: [MY_TOKNE_ADDRESS],
  });

  useEffect(() => {
    console.log(data, "datadatadata");
  }, [data]);

  return (
    <div className="mt-2">
      <div>Rewards token</div>
      {!isLoading && <div>{formatEther(data!)}</div>}
    </div>
  );
};

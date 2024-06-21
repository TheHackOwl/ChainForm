"use client";

import React from "react";
import { formatEther } from "viem";
import { useReadContract, useAccount } from "wagmi";

import { MY_TOKNE_ABI, MY_TOKNE_ADDRESS } from "@/constants/contract/myToken";

interface TokenBalanceProps {}

export const TokenBalance: React.FC<TokenBalanceProps> = () => {
  const { address } = useAccount();
  const { data, isLoading } = useReadContract({
    abi: MY_TOKNE_ABI,
    address: MY_TOKNE_ADDRESS,
    functionName: "balanceOf",
    args: [address!],
  });

  return (
    <div className="mt-4">
      <div className="text-slate-100">My token</div>
      {!isLoading && <div className="text-2xl">{formatEther(data!)}</div>}
    </div>
  );
};

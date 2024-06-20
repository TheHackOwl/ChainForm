"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <div className="mt-2">
      <div>Total my token</div>
      {!isLoading && <div>{formatEther(data!)}</div>}
    </div>
  );
};

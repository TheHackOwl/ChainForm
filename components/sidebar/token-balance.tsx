"use client";

import React, { useMemo, useState, useEffect } from "react";
import { formatEther } from "viem";
import { useReadContract, useAccount } from "wagmi";

import { getFormatNumberRegex } from "@/lib/utils";
import { MY_TOKNE_ABI, MY_TOKNE_ADDRESS } from "@/constants/contract/myToken";

interface TokenBalanceProps {}
const decimalPlaces = 9;

export const TokenBalance: React.FC<TokenBalanceProps> = () => {
  const { address } = useAccount();
  const [balance, setBalance] = useState<string>("0");

  const { data, isLoading } = useReadContract({
    abi: MY_TOKNE_ABI,
    address: MY_TOKNE_ADDRESS,
    functionName: "balanceOf",
    args: [address!],
  });

  const regex = useMemo(() => {
    return getFormatNumberRegex(decimalPlaces);
  }, [decimalPlaces]);

  useEffect(() => {
    if (data == undefined) return;
    const res = formatEther(data!).match(regex);

    if (res) {
      setBalance(res[1]);
    } else {
      setBalance(formatEther(data!));
    }
  }, [data]);

  return (
    <div className="mt-4">
      <div className="text-slate-100">My token</div>
      {!isLoading && <div className="text-2xl">{balance}</div>}
    </div>
  );
};

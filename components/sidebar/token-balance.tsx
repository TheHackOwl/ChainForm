"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { formatEther } from "viem";
import { useReadContract, useAccount } from "wagmi";

import { getFormatNumberRegex } from "@/lib/utils";
import { MY_TOKNE_ABI, MY_TOKNE_ADDRESS } from "@/constants/contract/myToken";

export interface FancyMethods {
  refetch: () => void;
}

interface TokenBalanceProps {}
const decimalPlaces = 9;

export const TokenBalance = forwardRef<FancyMethods, TokenBalanceProps>(
  ({}, ref) => {
    const { address } = useAccount();
    const [balance, setBalance] = useState<string>("0");

    const { data, isLoading, refetch } = useReadContract({
      abi: MY_TOKNE_ABI,
      address: MY_TOKNE_ADDRESS,
      functionName: "balanceOf",
      args: [address!],
    });

    const regex = useMemo(() => {
      return getFormatNumberRegex(decimalPlaces);
    }, [decimalPlaces]);

    useImperativeHandle(ref, () => ({
      refetch: refetch,
    }));

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
  }
);

TokenBalance.displayName = "TokenBalance";

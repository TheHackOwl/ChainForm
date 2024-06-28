import React, { useState, useMemo, useEffect } from "react";
import {
  useReadContract,
  useWriteContract,
  useAccount,
  useConfig,
} from "wagmi";
import { formatEther } from "viem";
import { waitForTransactionReceipt } from "@wagmi/core";
import { Button } from "@nextui-org/button";
import { toast } from "react-hot-toast";

import { getFormatNumberRegex } from "@/lib/utils";
import {
  CHAINFORM_ADDRESS,
  CHAINFORM_ABI,
} from "@/constants/contract/chainForm";
import { MY_TOKNE_ADDRESS } from "@/constants/contract/myToken";
interface RewardBalanceProps {
  onRefetch: () => void;
}
const decimalPlaces = 9;

export const RewardBalance: React.FC<RewardBalanceProps> = ({ onRefetch }) => {
  const config = useConfig();
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [balance, setBalance] = useState<string>("0");

  const { data, isLoading, refetch } = useReadContract({
    address: CHAINFORM_ADDRESS,
    abi: CHAINFORM_ABI,
    account: address,
    functionName: "getRewards",
    args: [MY_TOKNE_ADDRESS],
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

  const handleRewardClick = async () => {
    if (data == undefined) return;

    if (data.toString() === "0") {
      toast.error("No tokens available");

      return;
    }
    setIsClaiming(true);

    try {
      const txHash = await writeContractAsync({
        address: CHAINFORM_ADDRESS,
        abi: CHAINFORM_ABI,
        functionName: "claim",
        args: [MY_TOKNE_ADDRESS],
      });

      await waitForTransaction(txHash);
      toast.success("Reward claimed");

      refetch();
      onRefetch();
    } finally {
      setIsClaiming(false);
    }
  };

  /**
   * 等待交易完成
   * @param hash
   * @returns
   */
  const waitForTransaction = async (hash: `0x${string}`) => {
    const transactionReceipt = await waitForTransactionReceipt(config, {
      hash: hash,
    });

    return transactionReceipt;
  };

  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="flex-1">
        <div className="text-slate-100">Rewards token</div>
        {!isLoading && <div className="flex-1 text-2xl">{balance}</div>}
      </div>
      <Button
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        color="primary"
        isLoading={isClaiming}
        variant="shadow"
        onClick={handleRewardClick}
      >
        Reward
      </Button>
    </div>
  );
};

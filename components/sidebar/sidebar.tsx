"use client";

import React, { useRef } from "react";
import { useAccount } from "wagmi";

import { SidebarHeader } from "./header";
import { TokenBalance, FancyMethods } from "./token-balance";
import { RewardBalance } from "./reward-balance";
import { RewardRecord } from "./reward-record";

import { DynamicDrawer } from "@/components/drawer/index";
interface SidebarProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const tokenBalanceRef = useRef<FancyMethods>(null);
  const rewardRecordRef = useRef<FancyMethods>(null);
  const { address } = useAccount();

  const refetch = () => {
    tokenBalanceRef.current?.refetch();
    rewardRecordRef.current?.refetch();
  };

  if (!address) return <></>;

  return (
    <DynamicDrawer isOpen={isOpen} onClose={onClose}>
      <div className="h-60 bg-indigo-500  p-4 bg-[url('/images/top-bg.png')] bg-cover text-white">
        <SidebarHeader onClose={onClose} />
        <TokenBalance ref={tokenBalanceRef} />
        <RewardBalance onRefetch={refetch} />
      </div>
      <RewardRecord ref={rewardRecordRef} />
    </DynamicDrawer>
  );
};

// Sidebar.tsx
import React from "react";
import { useAccount } from "wagmi";

import { SidebarHeader } from "./header";
import { TokenBalance } from "./token-balance";
import { RewardBalance } from "./reward-balance";

import { DynamicSheet } from "@/components/sheet/index";
interface SidebarProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { address } = useAccount();

  if (!address) return <></>;

  return (
    <DynamicSheet isOpen={isOpen} onClose={onClose}>
      <div className="h-56 bg-indigo-500  p-4 rounded-b-2xl bg-[url('/images/top-bg.png')] bg-cover text-white">
        <SidebarHeader onClose={onClose} />
        <TokenBalance />
        <RewardBalance />
      </div>
    </DynamicSheet>
  );
};

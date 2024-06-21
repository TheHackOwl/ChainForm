"use client";
import React, { useState, useEffect } from "react";
import { useDisconnect, useAccount, useChainId } from "wagmi";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { toast } from "react-hot-toast";

import { abbreviateAddress } from "@/lib/utils";
import { CopyIcon, LogOutIcon } from "@/components/icons";
interface SidebarHeaderProps {
  onClose: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onClose }) => {
  const chainId = useChainId();
  const [icon, setIcon] = useState<string>("");
  const { disconnect } = useDisconnect();
  const { address, connector, chain } = useAccount();

  useEffect(() => {
    if (connector && connector.rkDetails) {
      getIcon();
    }
  }, [connector, chainId]);

  const getIcon = async () => {
    if (connector && connector.rkDetails) {
      const iconUrl = await (connector.rkDetails as any).iconUrl();

      setIcon(iconUrl);
    }
  };

  /**
   * 拷贝地址
   * @param text
   */
  const copyAddress = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Address copied to clipboard !");
    } catch (err) {
      toast.error("Copy failed !");
    }
  };

  return (
    <div className="flex w-full mt-4">
      <Avatar
        className="p-2 w-12	h-12 bg-slate-100"
        name={connector?.name || ""}
        src={icon}
      />

      <div className="ml-2">
        <div className="flex relative">
          <span className="text-base font-medium 	text-white">
            {abbreviateAddress(address as string)}
          </span>
          <Button
            isIconOnly
            className="absolute -right-2 top-0 -translate-y-1/4"
            variant="light"
            onClick={() => {
              copyAddress(address as string);
            }}
          >
            <CopyIcon fill="#ffffff" height={16} width={16} />
          </Button>
        </div>
        <div className="text-slate-200 text-sm">{chain && chain?.name}</div>
      </div>
      <Button
        isIconOnly
        className="absolute right-4"
        variant="light"
        onClick={async () => {
          await disconnect();
          onClose();
        }}
      >
        <LogOutIcon />
      </Button>
    </div>
  );
};

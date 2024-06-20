"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useReadContract } from "wagmi";

import { Responses } from "./responses";

import { Settings } from "@/components/settings/settings";
import { AnswerForm } from "@/components/answer/answer-form";
import { FormDataType, RewardRule } from "@/types";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { withWallet } from "@/components/hoc/withWallet";

interface UseReadContractReturnType {
  readonly data: FormDataType | undefined;
}

interface ViewTabsProps {
  id: string;
}

const rewardRule: RewardRule = {
  intSettings: [BigInt(1), BigInt(1)],
  token: "0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475)",
};

const ViewTabsWappedComponent: React.FC<ViewTabsProps> = ({ id }) => {
  const { data: formData }: UseReadContractReturnType = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getForm",
    args: [BigInt(id)],
  });

  // Todo: 加载动画
  if (!formData) return null;

  return (
    <Tabs aria-label="Options" className="relative" color="primary">
      <Tab key="questions" title="Questions">
        <AnswerForm formData={formData} formId={id} isDisable={true} />
      </Tab>
      <Tab key="responses" title="Responses">
        <Responses formId={id} />
      </Tab>
      <Tab key="setting" title="Settings">
        <Settings disabled={true} rewardRule={rewardRule} />
      </Tab>
    </Tabs>
  );
};

export const ViewTabs = withWallet<ViewTabsProps>(ViewTabsWappedComponent);

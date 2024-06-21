"use client";
import React, { useEffect, useState } from "react";
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

interface ViewTabsProps {
  id: string;
}

const ViewTabsWappedComponent: React.FC<ViewTabsProps> = ({ id }) => {
  const { data } = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getForm",
    args: [BigInt(id)],
  });

  const [formData, setFromData] = useState<FormDataType | null>(null);
  const [rewardRule, setRewardRule] = useState<RewardRule | null>(null);
  const [expireAt, setExpireAt] = useState<number>();

  useEffect(() => {
    if (data) {
      console.log(data, "view-data");

      const newFormData: FormDataType = {
        ...data[0],
        questions: data[0].questions.map((item) => JSON.parse(item)),
      };

      setFromData(newFormData);
      setExpireAt(Number(data[1].expireAt));
      setRewardRule(data[1].rewardRule as RewardRule);
    }
  }, [data]);

  // Todo: 加载动画
  if (!rewardRule || !formData) return null;

  return (
    <Tabs aria-label="Options" className="relative" color="primary">
      <Tab key="questions" title="Questions">
        <AnswerForm formData={formData} formId={id} isDisable={true} />
      </Tab>
      <Tab key="responses" title="Responses">
        <Responses formId={id} />
      </Tab>
      <Tab key="setting" title="Settings">
        {expireAt && (
          <Settings
            disabled={true}
            expireAt={expireAt}
            rewardRule={rewardRule}
          />
        )}
      </Tab>
    </Tabs>
  );
};

export const ViewTabs = withWallet<ViewTabsProps>(ViewTabsWappedComponent);

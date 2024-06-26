"use client";
import React, { useEffect, useState } from "react";
import { useReadContracts } from "wagmi";
import { Tabs, Tab } from "@nextui-org/tabs";

import { RemindModal } from "./remind-modal";

import { AnswerForm } from "@/components/answer/answer-form";
import { withWallet } from "@/components/hoc/withWallet";
import { Settings } from "@/components/settings/settings";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { FormDataType, RewardRule } from "@/types";

interface AnswerPageProps {
  id: string;
}

const AnswerPageWappedComponent: React.FC<AnswerPageProps> = ({ id }) => {
  const [formId, setFormId] = useState<string>(id);

  const { data, isLoading } = useReadContracts({
    contracts: [
      {
        abi: CHAINFORM_ABI,
        address: CHAINFORM_ADDRESS,
        functionName: "getForm",
        args: [BigInt(id)],
      },
      {
        abi: CHAINFORM_ABI,
        address: CHAINFORM_ADDRESS,
        functionName: "hasUserSubmitted",
        args: [BigInt(id)],
      },
    ],
  });

  const [formData, setFormData] = useState<FormDataType>();
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [rewardRule, setRewardRule] = useState<RewardRule | null>(null);
  const [expireAt, setExpireAt] = useState<number>();
  const [isPublic, setIsPublic] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading && data) {
      const form = data[0].result;

      if (form) {
        const newFormData: FormDataType = {
          ...form[0],
          questions: form[0].questions.map((item: string) => {
            try {
              return JSON.parse(item);
            } catch (error) {
              return item;
            }
          }),
        };

        setFormData(newFormData);

        const curTime = Date.now();

        if (Number(form[1].expireAt) <= curTime) {
          setIsExpired(true);
        }

        setExpireAt(Number(form[1].expireAt));
        setRewardRule(form[1].rewardRule as RewardRule);
        setIsPublic(form[1].isPublic);
      }
      setFormId(id);

      setHasSubmitted(data[1].result || false);
    }
  }, [isLoading]);

  // Todo: 添加加载动画
  if (formData == null) return <></>;

  // 表单是否超出填写日期
  if (isExpired)
    return <RemindModal content={<p>The form has expired</p>} isOpen={true} />;

  // 是否已经填写过表单
  if (hasSubmitted)
    return (
      <RemindModal
        content={<p>You have already answered this form</p>}
        isOpen={true}
      />
    );

  return (
    <div className="max-w-screen-md m-auto">
      <Tabs aria-label="Options" className="relative" color="primary">
        <Tab key="answer" title="Answer">
          <AnswerForm formData={formData} formId={formId} isDisable={false} />
        </Tab>
        <Tab key="formInfo" title="Form Information">
          {expireAt && rewardRule && (
            <Settings
              disabled={true}
              expireAt={expireAt}
              isPublic={isPublic}
              rewardRule={rewardRule}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export const AnswerPage = withWallet<AnswerPageProps>(
  AnswerPageWappedComponent
);

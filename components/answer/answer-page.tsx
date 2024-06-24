"use client";
import React, { useEffect, useState } from "react";
import { useReadContracts } from "wagmi";

import { RemindModal } from "./remind-modal";

import { AnswerForm } from "@/components/answer/answer-form";
import { withWallet } from "@/components/hoc/withWallet";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { FormDataType } from "@/types";

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

  useEffect(() => {
    if (!isLoading && data) {
      const form = data[0].result;

      if (form) {
        const newFormData: FormDataType = {
          ...form[0],
          questions: form[0].questions.map((item: string) => JSON.parse(item)),
        };

        setFormData(newFormData);

        const curTime = Date.now();

        if (Number(form[1].expireAt) <= curTime) {
          setIsExpired(true);
        }
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
      <AnswerForm formData={formData} formId={formId} isDisable={false} />
    </div>
  );
};

export const AnswerPage = withWallet<AnswerPageProps>(
  AnswerPageWappedComponent
);

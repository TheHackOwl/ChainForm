"use client";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";

import { AnswerForm } from "@/components/answer/answer-form";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { FormDataType } from "@/types";

interface UseReadContractReturnType {
  readonly data: FormDataType | undefined;
  readonly isLoading: boolean;
}

export default function AnswerPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const [formId, setFormId] = useState<string>(params.id);
  const { data, isLoading }: UseReadContractReturnType = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getForm",
    args: [BigInt(params.id)],
  });

  const [formData, setFormData] = useState<FormDataType>();

  useEffect(() => {
    if (!isLoading) {
      setFormId(params.id);
      setFormData(data);
    }
  }, [isLoading]);

  // Todo: 添加加载动画
  if (formData == null) return;

  return (
    <div className="max-w-screen-md m-auto">
      <AnswerForm formData={formData} formId={formId} isDisable={false} />
    </div>
  );
}

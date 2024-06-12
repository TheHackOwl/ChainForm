"use client";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";

import { AnswerForm } from "@/components/answer/answer-form";
import { ChainFormDataType } from "@/types";
import { abi } from "@/constants/abi";
import { contractAddress } from "@/constants/index";

export default function AnswerPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const [formId, setFormId] = useState<string>(params.id);
  const { data, isLoading } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getForm",
    args: [BigInt(params.id)],
  });

  const [formData, setFormData] = useState<ChainFormDataType>();

  useEffect(() => {
    console.log(data);
    if (!isLoading) {
      setFormId(params.id);
      setFormData(data as ChainFormDataType);
    }
  }, [isLoading]);

  if (formData == null) return;

  return (
    <div className="max-w-screen-md m-auto">
      <AnswerForm formData={formData} formId={formId} isDisable={false} />
    </div>
  );
}

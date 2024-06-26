"use client";
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useAccount, useWriteContract } from "wagmi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { AnswerFirstCard } from "@/components/answer/answer-first-card";
import { AnserCard } from "@/components/answer/answer-card";
import { FormDataType, Question, AnswerFormType } from "@/types";
import { generateHash } from "@/lib/utils";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { useAggregateRefsData, useCardFocus } from "@/hooks/index";
import { CardSelector } from "@/components/form-ui/card-selector";
import { useRequireConnect } from "@/hooks";
import { cardGap } from "@/components/primitives";

interface CustomError extends Error {
  shortMessage?: string;
}

interface AnswerFormProps {
  formData: FormDataType | AnswerFormType;
  isDisable: boolean;
  formId: string;
}

export const AnswerForm: React.FC<AnswerFormProps> = ({
  formData,
  isDisable,
  formId,
}) => {
  const router = useRouter();
  const [Sending, setSending] = useState(false);
  const { requireConnect } = useRequireConnect();
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();

  const {
    refs: questionRefs,
    aggregateData,
    checkAllComponentsStatus,
  } = useAggregateRefsData<Question>();

  const { selectedCard, setSelectedCard, registerCard, removeCard } =
    useCardFocus();

  const handleSubmit = async () => {
    setSending(true);
    try {
      // 校验表单
      if (!checkAllComponentsStatus()) {
        toast.error("Please check the form");

        return;
      }
      // 检查钱包连接
      await requireConnect();

      // 获取提交数据
      const submitData = getSubmitData();

      const { cid } = await fetch("/api/submission", {
        method: "POST",
        body: JSON.stringify(submitData),
      }).then((res) => res.json());

      // 生成数据哈希
      const dataHash = await generateHash(submitData);

      // 调用智能合约
      await callSmartContract(formId, cid, dataHash);

      const duration = 1000;

      toast.success("Successfully Submit!", {
        duration,
      });

      setTimeout(() => {
        router.replace("/");
      }, duration);
    } catch (error) {
      console.dir(error);
    } finally {
      setSending(false);
    }
  };

  // 调用智能合约函数
  const callSmartContract = async (
    formId: string,
    cid: string,
    dataHash: string
  ) => {
    try {
      const _formId = BigInt(formId);

      await writeContractAsync({
        abi: CHAINFORM_ABI,
        address: CHAINFORM_ADDRESS,
        account: address,
        functionName: "submitForm",
        args: [_formId, dataHash, cid],
      });
    } catch (error: any) {
      const customError = error as CustomError;

      customError.shortMessage && toast.error(customError.shortMessage);

      console.error("调用智能合约出错：", error);
      throw new Error("调用智能合约出错");
    }
  };

  const getSubmitData = (): AnswerFormType => {
    const answer = aggregateData();

    return {
      originalFormID: formId,
      questions: answer,
      name: formData!.name,
      description: formData!.description,
    };
  };

  return (
    <div className={cardGap()}>
      <AnswerFirstCard
        description={formData.description}
        name={formData.name}
      />
      {formData.questions.map((question, index) => {
        return (
          <CardSelector
            key={index}
            id={index}
            registerCard={registerCard}
            removeCard={removeCard}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          >
            <AnserCard
              ref={(el) => {
                // 这里确保refs数组和元素同步
                if (el) {
                  questionRefs.current[index] = el;
                }
              }}
              isDisable={isDisable}
              question={question}
            />
          </CardSelector>
        );
      })}
      {!isDisable && (
        <Card>
          <CardBody>
            <Button color="primary" isLoading={Sending} onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

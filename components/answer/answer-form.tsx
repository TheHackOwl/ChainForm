import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useAccount, useWriteContract } from "wagmi";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { AnswerFirstCard } from "@/components/answer/answer-first-card";
import { AnserCard } from "@/components/answer/answer-card";
import { Answer, ChainFormDataType, AnswerFormType } from "@/types";
import { saveAnswerForm, generateHash } from "@/app/actions";
import { ABI, SUBMIT_FORM, CONTRACT_ADDRESS } from "@/constants/contract";
import { useAggregateRefData, useCardFocus } from "@/hooks/index";
import { FormCard } from "@/components/form-ui/form-card";
import { useRequireConect } from "@/hooks";

interface CustomError extends Error {
  shortMessage?: string;
}

interface AnswerFormProps {
  formData: ChainFormDataType;
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

  const { requireConnect } = useRequireConect();

  const { writeContractAsync } = useWriteContract();

  const { address } = useAccount();

  const {
    refs: questionRefs,
    aggregateData,
    checkAllComponentsStatus,
  } = useAggregateRefData<Answer>();

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
      const submitData: AnswerFormType = getSubmitData();

      // 保存表单数据并获取cid
      const cid = await saveAnswerForm(submitData);

      // 生成数据哈希
      const dataHash = generateHash(submitData);

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
      console.error("提交过程出错：", error);
    } finally {
      setSending(false);
    }
  };

  // 调用智能合约函数
  const callSmartContract = async (
    formId: string,
    cid: any,
    dataHash: string
  ) => {
    try {
      const _formId = BigInt(formId);
      const cidStr = cid.toString();

      await writeContractAsync({
        abi: ABI,
        address: CONTRACT_ADDRESS,
        account: address,
        functionName: SUBMIT_FORM,
        args: [_formId, cidStr, dataHash],
      });
    } catch (error: any) {
      const customError = error as CustomError;

      customError.shortMessage && toast.error(customError.shortMessage);

      console.error("调用智能合约出错：", error);
      throw new Error("调用智能合约出错");
    }
  };

  const getSubmitData = () => {
    const answer = aggregateData();

    return {
      originalFormID: formId,
      answer: answer,
      name: formData!.name,
      description: formData!.description,
    };
  };

  return (
    <div className="grid gap-y-4">
      <AnswerFirstCard
        description={formData.description}
        name={formData.name}
      />
      {formData.questions.map((question, index) => {
        return (
          <FormCard
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
              question={JSON.parse(question)}
            />
          </FormCard>
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

      <Toaster />
    </div>
  );
};

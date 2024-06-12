import React, { useRef } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useAccount, useWriteContract } from "wagmi";

import { AnswerFirstCard } from "@/components/answer/answer-first-card";
import { AnserCard, FancyMethods } from "@/components/answer/answer-card";
import { Answer, ChainFormDataType, AnswerFormType } from "@/types";
import { saveAnswerForm, generateHash } from "@/app/actions";
import { abi } from "@/constants/abi";
import { contractAddress } from "@/constants/index";
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
  const { writeContract } = useWriteContract();
  const { address } = useAccount();
  const questionRefs = useRef<FancyMethods[]>([]);
  const handleSubmit = async () => {
    // TODO: 提交前判断是否连接钱包
    const submitData: AnswerFormType = getSubmitData();

    console.log(submitData, "submitData");
    const cid = await saveAnswerForm(submitData);

    console.log("提交后的cid:", cid);

    const dataHash = generateHash(submitData);
    const _formId = BigInt(formId);
    const cidStr = cid.toString();

    writeContract(
      {
        abi: abi,
        address: contractAddress,
        account: address,
        functionName: "submitForm",
        args: [_formId, cidStr, dataHash],
      },
      {
        onSuccess(data) {
          console.log("onSuccess", data);
        },
        onError(error) {
          console.log("onError", error);
        },
        onSettled(data) {
          console.log("onSettled", data);
        },
      }
    );
  };

  const getSubmitData = () => {
    const answer: Answer[] = [];

    // 获取表单数据
    questionRefs.current.forEach((ref) => {
      answer.push(ref.combinedData());
    });

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
          <AnserCard
            key={index}
            ref={(el) => {
              // 这里确保refs数组和元素同步
              if (el) {
                questionRefs.current[index] = el;
              }
            }}
            isDisable={isDisable}
            question={JSON.parse(question)}
          />
        );
      })}
      {!isDisable && (
        <Card>
          <CardBody>
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

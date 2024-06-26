"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useWriteContract, useConfig } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { parseGwei } from "viem";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useQuestions } from "./hooks/useQuestions";
import { useFormInfo } from "./hooks/useFormInfo";
import { useRewardRule } from "./hooks/useRewardRule";
import { useTabsKey, tabKeys } from "./hooks/useTabsKey";

import { Settings } from "@/components/settings/settings";
import { QuestionCardContent } from "@/components/create/question-card-content";
import { CardSelector } from "@/components/form-ui/card-selector";
import { FirstCard } from "@/components/create/first-card";
import { FormDataType, Question, SettingsType } from "@/types/index";
import {
  useAggregateRefsData,
  useCardFocus,
  useRequireConnect,
  useVerify,
} from "@/hooks";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import {
  MY_TOKNE_ABI,
  APPROVE,
  MY_TOKNE_ADDRESS,
} from "@/constants/contract/myToken";
import { cardGap } from "@/components/primitives";
interface FormTabsProps {
  templateData: FormDataType;
  settings: SettingsType;
}

export function FormTabs({ templateData, settings }: FormTabsProps) {
  const config = useConfig();
  const router = useRouter();
  const { currentTab, toNextStep, toPreviousStep } = useTabsKey();
  const { requireConnect } = useRequireConnect();
  const { writeContractAsync } = useWriteContract();
  const [sending, setSending] = useState(false);
  const {
    refs: questionRefs,
    aggregateData,
    checkAllComponentsStatus,
  } = useAggregateRefsData<Question>();
  const { baseInfo, updateBaseInfo } = useFormInfo({
    name: templateData.name,
    description: templateData.description,
  });
  const {
    questionList,
    deleteQuestion,
    copyQuestion,
    addQuestion,
    setQuestionList,
  } = useQuestions(templateData.questions);
  const [isPublic, setIsPublic] = useState<boolean>(
    () => settings.isPublic ?? true
  );
  const { rewardRule, intSettings, setInitSettings, setToken } = useRewardRule(
    settings.rewardRule
  );
  const [expireAt, setExpireAt] = useState<number>(() =>
    Number(settings.expireAt)
  );
  const { selectedCard, setSelectedCard, registerCard, removeCard } =
    useCardFocus();
  const [rewardLogic, setRewardLogic] = useState<`0x${string}`>(
    settings.rewardLogic
  );
  const { register, unregister, verify } = useVerify();

  /**
   * 发布函数
   */
  const handlePublish = async () => {
    const result = verify();

    console.log(result, "result");

    if (!result) {
      toast.error("Please check the information you have filled in");

      return;
    }
    setSending(true);
    try {
      await requireConnect();

      const txHash = await callApprove(intSettings[0] * intSettings[1]);

      await waitForTransaction(txHash);

      const questions: string[] = questionList.map((item) =>
        JSON.stringify(item)
      );

      const settings: SettingsType = {
        expireAt: BigInt(expireAt),
        rewardRule,
        rewardLogic: rewardLogic,
        isPublic: isPublic,
        rsaPublicKey: "",
      };

      const createFormTxHash = await callCreateForm(
        baseInfo.name,
        baseInfo.description,
        questions,
        settings
      );

      await waitForTransaction(createFormTxHash);

      toast.success("Successfully create!");
      setTimeout(() => {
        router.push("/forms");
      }, 1000);
    } catch (error: any) {
      console.error("Publish fail", error);
      toast.error(error.shortMessage);
    } finally {
      setSending(false);
    }
  };

  /**
   * @param amount 调用授权函数
   * @returns
   */
  const callApprove = async (amount: bigint): Promise<`0x${string}`> => {
    const res = await writeContractAsync({
      abi: MY_TOKNE_ABI,
      address: MY_TOKNE_ADDRESS,
      functionName: APPROVE,
      gasPrice: parseGwei("0.06"),
      args: [CHAINFORM_ADDRESS, amount],
    });

    return res;
  };

  // 调用智能合约函数
  const callCreateForm = async (
    name: string,
    description: string,
    questions: string[],
    settings: SettingsType
  ): Promise<`0x${string}`> => {
    const res = await writeContractAsync({
      abi: CHAINFORM_ABI,
      address: CHAINFORM_ADDRESS,
      functionName: "createForm",
      args: [name, description || "", questions, settings],
    });

    return res;
  };

  /**
   * 等待交易完成
   * @param hash
   * @returns
   */
  const waitForTransaction = async (hash: `0x${string}`) => {
    const transactionReceipt = await waitForTransactionReceipt(config, {
      hash: hash,
    });

    return transactionReceipt;
  };

  /**
   * 问卷页面点击下一步需要保存数据
   */
  const handleQuestionsNextStep = () => {
    const result = verify();

    console.log(result, "result");

    if (!result) {
      toast.error("Please fill in all the required fields.");

      return;
    }
    setQuestionList(aggregateData());
    toNextStep();
  };

  /**
   * 退出页面
   */
  const onCancel = () => {
    router.back();
  };

  return (
    <Tabs
      aria-label="Options"
      className="relative"
      color="primary"
      disabledKeys={tabKeys}
      fullWidth={true}
      selectedKey={currentTab}
    >
      <Tab key={tabKeys[0]} title="Questions">
        <div className={cardGap()}>
          <FirstCard
            change={updateBaseInfo}
            description={baseInfo.description}
            name={baseInfo.name}
            register={register}
            unregister={unregister}
          />
          {questionList.map((question, index) => {
            return (
              <CardSelector
                key={question.name + index}
                id={question.name + index}
                registerCard={registerCard}
                removeCard={removeCard}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              >
                <QuestionCardContent
                  ref={(el) => {
                    // 这里确保refs数组和元素同步
                    if (el) {
                      questionRefs.current[index] = el;
                    }
                  }}
                  index={index}
                  question={question}
                  register={register}
                  unregister={unregister}
                  onAdd={addQuestion}
                  onCopy={copyQuestion}
                  onDelete={deleteQuestion}
                />
              </CardSelector>
            );
          })}

          <Card>
            <CardBody className="flex gap-4 flex-row">
              <Button
                className="flex-1"
                color="primary"
                isDisabled={sending}
                variant="ghost"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                className="flex-1"
                color="primary"
                isLoading={sending}
                onClick={handleQuestionsNextStep}
              >
                Next step
              </Button>
            </CardBody>
          </Card>
        </div>
      </Tab>
      <Tab key="settings" title="Settings">
        <Settings
          disabled={false}
          expireAt={expireAt}
          isPublic={isPublic}
          register={register}
          rewardRule={rewardRule}
          setExpireAt={setExpireAt}
          setInitSettings={setInitSettings}
          setPublic={setIsPublic}
          setRewardLogic={setRewardLogic}
          setToken={setToken}
          unregister={unregister}
        />
        <Card className="mt-4">
          <CardBody className="flex gap-4 flex-row">
            <Button
              className="flex-1"
              color="primary"
              isDisabled={sending}
              variant="ghost"
              onClick={toPreviousStep}
            >
              Previous
            </Button>
            <Button
              className="flex-1"
              color="primary"
              isLoading={sending}
              onClick={handlePublish}
            >
              Publish
            </Button>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}

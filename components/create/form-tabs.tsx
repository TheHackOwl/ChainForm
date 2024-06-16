"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useWriteContract } from "wagmi";
import React, { useState } from "react";

import { useQuestions } from "./hooks/useQuestions";
import { useFormInfo } from "./hooks/useFormInfo";

import { Settings } from "@/components/settings/settings";
import { QuestionCardContent } from "@/components/create/question-card-content";
import { CardSelector } from "@/components/form-ui/card-selector";
import { FirstCard } from "@/components/create/first-card";
import { FormDataType, Question } from "@/types/index";
import { useAggregateRefData, useCardFocus, useRequireConnect } from "@/hooks";
import { ABI, CONTRACT_ADDRESS, CREATE_FORM } from "@/constants/contract";
import { cardGap } from "@/components/primitives";
interface FormTabsProps {
  templateData: FormDataType;
}

export function FormTabs({ templateData }: FormTabsProps) {
  const { requireConnect } = useRequireConnect();

  const { writeContractAsync } = useWriteContract();

  const [isSave, setIsSave] = useState(true); // 每次切换tab，是否保存了数据

  const [sending, setSending] = useState(false);

  const { refs: questionRefs, aggregateData } = useAggregateRefData<Question>();

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

  const { selectedCard, setSelectedCard, registerCard, removeCard } =
    useCardFocus();

  /**
   * 发布函数
   */
  const handlePublish = async () => {
    setSending(true);
    try {
      await requireConnect();

      const questions: string[] = aggregateData().map((item) =>
        JSON.stringify(item)
      );

      await callSmartContract(baseInfo.name, baseInfo.description, questions);

      // Todo: 回到forms页面
    } catch (error) {
    } finally {
      setSending(false);
    }
  };

  // 调用智能合约函数
  const callSmartContract = async (
    name: string,
    description: string,
    questions: string[]
  ) => {
    console.log(name, description, questions);

    try {
      await writeContractAsync({
        abi: ABI,
        address: CONTRACT_ADDRESS,
        functionName: CREATE_FORM,
        args: [name, description, questions],
      });
    } catch (error) {
      console.error("调用智能合约出错:", error);
    }
  };

  /**
   * 切换tab时，保存questions的值
   * @param key
   */
  const handleTabsChange = (key: React.Key) => {
    if (!isSave) {
      setQuestionList(aggregateData());

      setIsSave(true);
    }

    if (key === "questions") setIsSave(false);
  };

  return (
    <Tabs
      aria-label="Options"
      className="relative"
      color="primary"
      onSelectionChange={handleTabsChange}
    >
      <Tab key="questions" title="Questions">
        <div className={cardGap()}>
          <FirstCard
            change={updateBaseInfo}
            description={baseInfo.description}
            name={baseInfo.name}
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
                  onAdd={addQuestion}
                  onCopy={copyQuestion}
                  onDelete={deleteQuestion}
                />
              </CardSelector>
            );
          })}

          <Card>
            <CardBody>
              <Button
                color="primary"
                isLoading={sending}
                onClick={handlePublish}
              >
                Send
              </Button>
            </CardBody>
          </Card>
        </div>
      </Tab>
      <Tab key="settings" title="Settings">
        <Settings />
      </Tab>
    </Tabs>
  );
}

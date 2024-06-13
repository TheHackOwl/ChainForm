"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useWriteContract } from "wagmi";
import React, { useState } from "react";

import { useQuestions } from "./hooks/useQuestions";
import { useFormInfo } from "./hooks/useFormInfo";

import { QuestionCardContent } from "@/components/create/question-card-content";
import { FormCard } from "@/components/form-ui/form-card";
import { FirstCard } from "@/components/create/first-card";
import { FormDataType, Question } from "@/types/index";
import { useAggregateRefData, useCardFocus, useRequireConect } from "@/hooks";
import { ABI, CONTRACT_ADDRESS, CREATE_FORM } from "@/constants/contract";
interface FormTabsProps {
  templateData: FormDataType;
}

export function FormTabs({ templateData }: FormTabsProps) {
  const { requireConnect } = useRequireConect();

  const { writeContractAsync } = useWriteContract();

  const [isSave, setIsSave] = useState(true); // 每次切换tab，是否保存了数据

  const [Sending, setSending] = useState(false);

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
        <div className="grid gap-y-4">
          <FirstCard
            change={updateBaseInfo}
            description={baseInfo.description}
            name={baseInfo.name}
          />
          {questionList.map((question, index) => {
            return (
              <FormCard
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
              </FormCard>
            );
          })}

          <Card>
            <CardBody>
              <Button
                color="primary"
                isLoading={Sending}
                onClick={handlePublish}
              >
                Send
              </Button>
            </CardBody>
          </Card>
        </div>
      </Tab>
      <Tab key="excitation" title="Excitation">
        <Card>
          <CardBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CardBody>
        </Card>
      </Tab>
      <Tab key="setting" title="Setting">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}

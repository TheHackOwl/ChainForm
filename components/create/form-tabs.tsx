"use client";
import { useState, useRef } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useWriteContract } from "wagmi";

import { abi } from "@/constants/abi";
import { contractAddress, getDefaultQuestion } from "@/constants/index";
import { QuestionCard, FancyMethods } from "@/components/create/question-card";
import { FirstCard } from "@/components/create/first-card";
import { FormDataType, FormBaseInfo, Question } from "@/types/index";

interface FormTabsProps {
  templateData: FormDataType;
}

export function FormTabs(props: FormTabsProps) {
  const { writeContract } = useWriteContract();
  const questionRefs = useRef<FancyMethods[]>([]);
  const { templateData } = props;
  const [formData, setFormData] = useState<FormDataType>(templateData);

  const formInfoChange = (formbaseInfo: FormBaseInfo) => {
    setFormData({ ...formData, ...formbaseInfo });
  };

  /**
   * 删除一个question函数
   * @param index
   */
  const handleDelete = (index: Number) => {
    setFormData({
      ...formData,
      questions: formData.questions.filter((_, i) => i !== index),
    });
  };

  /**
   * copy一个question函数
   * @param index
   * @param question
   */
  const handleCopy = (index: number, question: Question) => {
    const questions = insertAt<Question>(
      [...formData.questions],
      index + 1,
      question
    );

    setFormData({
      ...formData,
      questions: questions,
    });
  };

  /**
   *
   * @param array 在index位置上插入元素
   * @param index
   * @param item
   * @returns
   */
  function insertAt<T>(array: T[], index: number, item: T): T[] {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      if (i === index) {
        newArray.push(item);
      }
      newArray.push(array[i]);
    }
    if (index >= array.length) {
      newArray.push(item);
    }

    return newArray;
  }

  /**
   * 发布函数
   */
  const handlePublish = async () => {
    const questions: string[] = [];

    // 获取表单数据
    questionRefs.current.forEach((ref) => {
      questions.push(JSON.stringify(ref.combinedData()));
    });

    writeContract(
      {
        abi,
        address: contractAddress,
        functionName: "createForm",
        args: [formData.name, formData.description, questions],
      },
      {
        onSuccess(data) {
          console.log(data, "onSuccess-data");
        },
        onError(error) {
          console.log(error, "onError-error");
        },
        onSettled(settled) {
          console.log(settled, "settled");
        },
      }
    );
  };

  /**
   * 添加卡片
   */
  const handleAdd = (index: number) => {
    const questions = insertAt<Question>(
      [...formData.questions],
      index + 1,
      getDefaultQuestion()
    );

    setFormData({
      ...formData,
      questions: questions,
    });
  };

  return (
    <Tabs aria-label="Options" className="relative" color="primary">
      <Tab key="questions" title="Questions">
        <div className="grid gap-y-4">
          <FirstCard
            change={formInfoChange}
            description={formData.description}
            name={formData.name}
          />
          {formData.questions.map((question, index) => {
            return (
              <QuestionCard
                key={question.name + index}
                ref={(el) => {
                  // 这里确保refs数组和元素同步
                  if (el) {
                    questionRefs.current[index] = el;
                  }
                }}
                index={index}
                question={question}
                onAdd={handleAdd}
                onCopy={handleCopy}
                onDelete={handleDelete}
              />
            );
          })}

          <Card>
            <CardBody>
              <Button color="primary" onClick={handlePublish}>
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

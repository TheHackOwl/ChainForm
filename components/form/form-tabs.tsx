"use client";
import { useState, useRef } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";

import { QuestionCard, FancyMethods } from "@/components/form/question-card";
import { FirstCard } from "@/components/form/first-card";
import { FormDataType, FormBaseInfo, Question } from "@/types/index";
interface FormTabsProps {
  templateData: FormDataType;
}

export function FormTabs(props: FormTabsProps) {
  // 初始化一个空数组来存储refs
  const questionRefs = useRef<FancyMethods[]>([]);
  const { templateData } = props;
  const [formData, setFormData] = useState<FormDataType>(templateData);

  // const extractState = (state: IAppState) => {
  //   return state.formData;
  // };

  // const actionMap = {
  //   saveFormData: saveFormData,
  //   saveFormBaseInfo: saveFormBaseInfo,
  // };

  // const [formData, appActions] = useRedux(extractState, actionMap);

  const formInfoChange = (formbaseInfo: FormBaseInfo) => {
    // console.log(formbaseInfo, "formbaseInfo");
    // appActions.saveFormBaseInfo(formbaseInfo);
    setFormData({ ...formData, ...formbaseInfo });
  };

  const handleDelete = (index: Number) => {
    setFormData({
      ...formData,
      questions: formData.questions.filter((_, i) => i !== index),
    });
  };

  const handleCopy = (index: number, question: Question) => {
    question.id = Date.now();
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

  const handlePublish = () => {
    // 获取表单数据
    questionRefs.current.forEach((ref) => {
      console.log(ref.combinedData());
    });
  };

  return (
    <Tabs aria-label="Options" className="relative" color="primary">
      <Tab key="questions" title="Questions">
        <div className="grid gap-y-4">
          <FirstCard
            change={formInfoChange}
            description={formData.description}
            title={formData.title}
          />
          {formData.questions.map((question, index) => {
            return (
              <QuestionCard
                key={question.id}
                ref={(el) => {
                  console.log(el, index);

                  // 这里确保refs数组和元素同步
                  if (el) {
                    questionRefs.current[index] = el;
                  }
                }}
                index={index}
                question={question}
                onCopy={handleCopy}
                onDelete={handleDelete}
              />
            );
          })}
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

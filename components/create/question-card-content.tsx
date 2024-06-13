"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import { CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

import { useOptions } from "./hooks/useOptions";

import { TextOption } from "@/components/create/text-option";
import { MultipleChoiceOption } from "@/components/create/multiple-choice-option";
import { CheckboxesOption } from "@/components/create/checkboxes-option";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import { CopyIcon, TrashBinIcon, AddIcon } from "@/components/icons";
import { FancyMethods } from "@/hooks";
import {
  answerOptions,
  answerOptionsEnum,
  AnswerType,
} from "@/constants/index";
import {
  Question,
  MultipleChoiceQuestion,
  CheckboxesQuestion,
} from "@/types/index";
interface QuestionCardContentProps {
  question: Question;
  index: number;
  onCopy: (index: number, question: Question) => void;
  onDelete: (index: number) => void;
  onAdd: (index: number) => void;
}

export const QuestionCardContent = forwardRef<
  FancyMethods<Question>,
  QuestionCardContentProps
>(({ question, index, onCopy, onDelete, onAdd }, ref) => {
  const [questionName, setQuestionName] = useState<string>(question.name);

  const [answerType, setAnswerType] = useState<AnswerType>(
    question.type || answerOptionsEnum.TEXT
  );

  const { options, updateOptions, updateOptionValue, addOption } = useOptions(
    (question as MultipleChoiceQuestion | CheckboxesQuestion).options || []
  );

  const [required, setRequired] = useState(question.required);

  // 定义由父组件调用的函数
  useImperativeHandle(ref, () => ({
    aggregateData,
    checkStatus: () => true,
  }));

  /**
   * type选项的change事件
   * @param e
   * @returns
   */
  const updateType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return;

    const type = e.target.value;

    setAnswerType(type as AnswerType);
  };

  /**
   * 标题输入框change事件
   * @param event
   */
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setQuestionName(value);
  };

  /**
   * 汇总数据
   * @returns
   */
  const aggregateData = (): Question => {
    const returnObj: Question = {
      name: questionName,
      type: answerType,
      required: required,
    };

    if (answerType == answerOptionsEnum.TEXT) return returnObj;

    (returnObj as CheckboxesQuestion | MultipleChoiceQuestion).options = [
      ...options,
    ];

    return returnObj;
  };

  return (
    <>
      <CardHeader>
        <div className="flex w-full">
          <Input
            classNames={{
              inputWrapper: "light:bg-slate-50 h-14",
              input: ["text-xl"],
              innerWrapper: "",
            }}
            color="primary"
            placeholder="Question"
            size="lg"
            value={questionName}
            variant="underlined"
            onChange={handleTitleChange}
          />
          <div className="w-1/2 px-8 flex items-center">
            <Select
              aria-label=" "
              classNames={{
                base: "h-full",
                mainWrapper: "h-full",
                trigger: "h-full light:bg-slate-50",
                value: "text-base",
              }}
              selectedKeys={[answerType]}
              onChange={updateType}
            >
              {answerOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </CardHeader>
      <FormCardBody>
        <div className="relative pb-12 border-b-1 border-inherit">
          {answerType == answerOptionsEnum.TEXT && <TextOption />}
          {answerType == answerOptionsEnum.MULTIPLECHOICE && (
            <MultipleChoiceOption
              addOption={addOption}
              options={options}
              updateOptionValue={updateOptionValue}
              updateOptions={updateOptions}
            />
          )}
          {answerType == answerOptionsEnum.CHECKBOXES && (
            <CheckboxesOption
              addOption={addOption}
              options={options}
              updateOptionValue={updateOptionValue}
              updateOptions={updateOptions}
            />
          )}
        </div>
      </FormCardBody>
      <CardFooter>
        <div className="w-full flex justify-end">
          <Button
            isIconOnly
            className="bg-transparent"
            onClick={() => {
              onAdd(index);
            }}
          >
            <AddIcon />
          </Button>
          <Button
            isIconOnly
            className="bg-transparent"
            onClick={() => {
              onCopy(index, aggregateData());
            }}
          >
            <CopyIcon />
          </Button>
          <Button
            isIconOnly
            className="bg-transparent"
            onClick={() => {
              onDelete(index);
            }}
          >
            <TrashBinIcon />
          </Button>
          <div className="border-l border-slate-300 h-8 mx-4" />
          <div className="flex items-center">
            Required&nbsp;&nbsp;{" "}
            <Switch
              isSelected={required}
              size="sm"
              onValueChange={(val) => {
                setRequired(val);
              }}
            />
          </div>
        </div>
      </CardFooter>
    </>
  );
});

QuestionCardContent.displayName = "QuestionCard";

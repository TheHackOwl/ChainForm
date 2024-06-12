"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import { CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

import { TextOption } from "@/components/create/text-option";
import { MultipleChoiceOption } from "@/components/create/multiple-choice-option";
import { CheckboxesOption } from "@/components/create/checkboxes-option";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import { FormCard } from "@/components/form-ui/form-card";
import { CopyIcon, TrashBinIcon, AddIcon } from "@/components/icons";
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
interface QuestionCardProps {
  question: Question;
  index: number;
  onCopy: (index: number, question: Question) => void;
  onDelete: (index: number) => void;
  onAdd: (index: number) => void;
}

// 定义这个组件对外公开的方法
export interface FancyMethods {
  combinedData: () => Question;
}

export const QuestionCard = forwardRef<FancyMethods, QuestionCardProps>(
  ({ question, index, onCopy, onDelete, onAdd }, ref) => {
    const [questionName, setQuestionName] = useState<string>(question.name);
    const [answerType, setAnswerType] = useState<AnswerType>(
      question.type || answerOptionsEnum.TEXT
    );

    const [options, setOptions] = useState<string[]>(() => {
      return (
        (question as MultipleChoiceQuestion | CheckboxesQuestion).options || []
      );
    });

    const [required, setRequired] = useState(question.required);

    useImperativeHandle(ref, () => ({
      combinedData,
    }));

    /**
     * type选项的change事件
     * @param e
     * @returns
     */
    const typeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
     * 组合数据称为Question
     * @returns
     */
    const combinedData = (): Question => {
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

    /**
     * 新增或删除options
     * @param options
     */
    const changeOptions = (options: string[]) => {
      setOptions(options);
    };

    /**
     * option的值改变
     * @param index
     * @param value
     */
    const optionValueChange = (index: number, value: string) => {
      const newOptions = [...options];

      newOptions[index] = value;

      setOptions(newOptions);
    };

    /**
     * 添加option
     */
    const addOption = () => {
      setOptions([...options, `option ${options.length + 1}`]);
    };

    /**
     * 编辑表单模式
     */
    return (
      <FormCard>
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
                onChange={typeChange}
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
                changeOptions={changeOptions}
                optionValueChange={optionValueChange}
                options={options}
              />
            )}
            {answerType == answerOptionsEnum.CHECKBOXES && (
              <CheckboxesOption
                addOption={addOption}
                changeOptions={changeOptions}
                optionValueChange={optionValueChange}
                options={options}
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
                onCopy(index, combinedData());
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
              必填&nbsp;&nbsp;{" "}
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
      </FormCard>
    );
  }
);

QuestionCard.displayName = "QuestionCard";

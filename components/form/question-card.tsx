"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

import { TextOption } from "./text-option";
import { MultipleChoiceOption } from "./multiple-choice-option";
import { CheckboxesOption } from "./checkboxes-option";

import { CopyIcon, TrashBinIcon } from "@/components/icons";
import { answerOptions, answerOptionsEnum } from "@/constants/index";

interface QuestionCardProps {}

export const QuestionCard: React.FC<QuestionCardProps> = () => {
  const [answerType, setAnswerType] = useState<string>(answerOptionsEnum.TEXT);

  return (
    <Card isBlurred className="p-4 border-s-indigo-500 border-l-8">
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
            variant="underlined"
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
              onChange={(e) => {
                setAnswerType(e.target.value);
              }}
            >
              {answerOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-visible ">
        <div className="relative pb-12 border-b-1 border-inherit">
          {answerType == answerOptionsEnum.TEXT && <TextOption />}
          {answerType == answerOptionsEnum.MULTIPLECHOICE && (
            <MultipleChoiceOption />
          )}
          {answerType == answerOptionsEnum.CHECKBOXES && <CheckboxesOption />}
        </div>
      </CardBody>
      <CardFooter>
        <div className="w-full flex justify-end">
          <Button isIconOnly className="bg-transparent">
            <CopyIcon />
          </Button>
          <Button isIconOnly className="bg-transparent">
            <TrashBinIcon />
          </Button>
          <div className="border-l border-slate-300 h-8 mx-4" />
          <div className="flex items-center">
            必填&nbsp;&nbsp; <Switch size="sm" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

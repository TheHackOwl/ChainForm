import { useState, useMemo, forwardRef, useImperativeHandle } from "react";
import { CardHeader } from "@nextui-org/card";

import { AnswerText } from "./answer-text";
import { AnswerMultipleChoice } from "./answer-multiple-choice";
import { AnswerCheckboxes } from "./answer-checkboxes";

import { FormCard } from "@/components/form-ui/form-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import {
  Question,
  MultipleChoiceQuestion,
  CheckboxesQuestion,
  Answer,
} from "@/types";
import { answerOptionsEnum } from "@/constants";

// 定义类型
type AnswerState = string | string[];

interface AnserCardProps {
  question: Question;
  isDisable: boolean;
}

// 定义这个组件对外公开的方法
export interface FancyMethods {
  combinedData: () => Answer;
}

export const AnserCard = forwardRef<FancyMethods, AnserCardProps>(
  ({ question, isDisable }, ref) => {
    // 使用 useMemo 在组件初始化时基于 question.type 设置初始值
    const initialAnswer = useMemo(() => {
      switch (question.type) {
        case answerOptionsEnum.TEXT:
          return ""; // 初始值为一个空字符串
        case answerOptionsEnum.MULTIPLECHOICE:
          return ""; // 这里可以根据具体需求设置初始值
        case answerOptionsEnum.CHECKBOXES:
          return []; // 初始值为一个空数组
        default:
          return "";
      }
    }, [question.type]);
    const [answer, setAnswer] = useState<AnswerState>(initialAnswer);

    useImperativeHandle(ref, () => ({
      combinedData,
    }));

    const combinedData = (): Answer => {
      return {
        ...question,
        answer: answer,
      } as Answer;
    };

    return (
      <FormCard>
        <CardHeader>{question.name}</CardHeader>
        <FormCardBody>
          {question.type == answerOptionsEnum.TEXT && (
            <AnswerText isDisable={isDisable} onValueChange={setAnswer} />
          )}

          {question.type == answerOptionsEnum.MULTIPLECHOICE && (
            <AnswerMultipleChoice
              isDisable={isDisable}
              options={(question as MultipleChoiceQuestion).options}
              onValueChange={setAnswer}
            />
          )}

          {question.type == answerOptionsEnum.CHECKBOXES && (
            <AnswerCheckboxes
              isDisable={isDisable}
              options={(question as CheckboxesQuestion).options}
              onValueChange={setAnswer}
            />
          )}
        </FormCardBody>
      </FormCard>
    );
  }
);

AnserCard.displayName = "AnserCard";

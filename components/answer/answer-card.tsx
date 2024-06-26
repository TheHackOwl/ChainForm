import { useState, forwardRef, useImperativeHandle } from "react";
import { CardHeader } from "@nextui-org/card";

import { AnswerText } from "./answer-text";
import { AnswerMultipleChoice } from "./answer-multiple-choice";
import { AnswerCheckboxes } from "./answer-checkboxes";

import { RequireStar } from "@/components/require-star";
import { FormCard } from "@/components/form-ui/form-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import { Question } from "@/types";
import { answerOptionsEnum } from "@/constants";
import { FancyMethods } from "@/hooks";

// 定义类型
type AnswerState = string | string[];

interface AnserCardProps {
  question: Question;
  isDisable: boolean;
  selected?: boolean;
}

export const AnserCard = forwardRef<FancyMethods<Question>, AnserCardProps>(
  ({ question, isDisable, selected }, ref) => {
    // 使用 useMemo 在组件初始化时基于 question.type 设置初始值
    const initialAnswer = () => {
      switch (question.type) {
        case answerOptionsEnum.TEXT:
          return question.answer || ""; // 初始值为一个空字符串
        case answerOptionsEnum.MULTIPLECHOICE:
          return question.answer || ""; // 这里可以根据具体需求设置初始值
        case answerOptionsEnum.CHECKBOXES:
          return question.answer || []; // 初始值为一个空数组
        default:
          return "";
      }
    };
    const [answer, setAnswer] = useState<AnswerState>(initialAnswer);

    // 定义由父组件调用的函数
    useImperativeHandle(ref, () => ({
      aggregateData: combinedData,
      checkStatus: checkForm,
    }));

    const combinedData = (): Question => {
      return {
        ...question,
        answer: answer,
      };
    };

    const checkForm = (): boolean => {
      const handleInvalid = () => {
        // 这里可以加入任何返回 false 时的处理逻辑
        return false;
      };

      if (!question.required) return true;

      if (typeof answer === "string") {
        return answer.trim() !== "" ? true : handleInvalid();
      }

      if (Array.isArray(answer)) {
        return answer.length > 0 ? true : handleInvalid();
      }

      return true;
    };

    return (
      <FormCard selected={selected}>
        <CardHeader>
          {question.name}
          {question.required && <RequireStar />}
        </CardHeader>
        <FormCardBody>
          {question.type == answerOptionsEnum.TEXT && (
            <AnswerText
              isDisable={isDisable}
              value={answer as string}
              onValueChange={setAnswer}
            />
          )}

          {question.type == answerOptionsEnum.MULTIPLECHOICE && (
            <AnswerMultipleChoice
              isDisable={isDisable}
              options={question.options as string[]}
              value={answer as string}
              onValueChange={setAnswer}
            />
          )}

          {question.type == answerOptionsEnum.CHECKBOXES && (
            <AnswerCheckboxes
              isDisable={isDisable}
              options={question.options as string[]}
              value={answer as string[]}
              onValueChange={setAnswer}
            />
          )}
        </FormCardBody>
      </FormCard>
    );
  }
);

AnserCard.displayName = "AnserCard";

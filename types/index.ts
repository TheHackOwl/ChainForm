import { SVGProps } from "react";

import { AnswerType } from "@/constants/index";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface FormDataType extends FormBaseInfo {
  questions: Question[];
}

export interface FormBaseInfo {
  name: string;
  description: string;
}

export type Question =
  | TextQuestion
  | MultipleChoiceQuestion
  | CheckboxesQuestion;

export interface BaseQuestion {
  type: AnswerType;
  name: string;
  required: boolean;
}

export interface TextQuestion extends BaseQuestion {}

export interface MultipleChoiceQuestion extends BaseQuestion {
  options: string[];
}

export interface CheckboxesQuestion extends BaseQuestion {
  options: string[];
}

export interface AnswerFormType extends FormBaseInfo {
  originalFormID: string;
  answer: Answer[];
}

export type Answer = TextAnswer | MultipleChoiceAnswer | CheckboxesAnswer;

interface BaseAnswer extends BaseQuestion {
  answer: any;
}

export interface TextAnswer extends BaseAnswer {
  answer: string;
}

export interface MultipleChoiceAnswer extends BaseAnswer {
  options: string[]; // Inherits options from MultipleChoiceQuestion
  answer: string;
}

export interface CheckboxesAnswer extends BaseAnswer {
  options: string[]; // Inherits options from CheckboxesQuestion
  answer: string[];
}

export interface ChainFormDataType {
  createdAt: bigint;
  creator: `0x${string}`;
  description: string;
  name: string;
  questions: string[];
}

import { SVGProps } from "react";

import { AnswerType } from "@/constants/index";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface FormDataType extends FormBaseInfo {
  id: string;
  questions: Question[];
}

export interface FormBaseInfo {
  title: string;
  description: string;
}

export type Question =
  | TextQuestion
  | MultipleChoiceQuestion
  | CheckboxesQuestion;

export interface BaseQuestion {
  id: number;
  type: AnswerType;
  questionTitle: string;
  required: boolean;
}

export interface TextQuestion extends BaseQuestion {}

export interface MultipleChoiceQuestion extends BaseQuestion {
  options: string[];
}

export interface CheckboxesQuestion extends BaseQuestion {
  options: string[];
}

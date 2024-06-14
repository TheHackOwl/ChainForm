import { AnswerType } from "@/constants/index";

export interface FormBaseInfo {
  name: string;
  description: string;
}

export interface FormDataType extends FormBaseInfo {
  createdAt?: bigint;
  creator?: `0x${string}`;
  questions: Question[];
}

export interface Question {
  type: AnswerType;
  name: string;
  required: boolean;
  answer?: Answer;
  options?: Options;
}

export type Answer = string | string[];
export type Options = string | string[];

export interface SubmissionType {
  cid: string;
  dataHash: string;
  submittedAt: bigint;
  submitter: `0x${string}`;
}

export interface AnswerFormType extends FormBaseInfo {
  originalFormID: string;
  questions: Question[];
}

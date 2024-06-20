import { AnswerType } from "@/constants/index";

export interface FormBaseInfo {
  name: string;
  description: string;
  createdAt?: bigint;
  creator?: `0x${string}`;
}

export interface FormDataType extends FormBaseInfo {
  questions: Question[];
  // settings: SettingsType;
}

export type SettingsType = {
  rewardRule: RewardRule;
  rewardLogic: `0x${string}`;
  expireAt: bigint;
};

export type RewardRule = {
  intSettings: IntSettings;
  token: Token;
};

export type IntSettings = bigint[];

export type Token = `0x${string}`;

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
  // settings?: SettingsType;
}

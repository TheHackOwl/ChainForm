export type AnswerType = "text" | "multipleChoice" | "checkboxes";

export enum answerOptionsEnum {
  TEXT = "text",
  MULTIPLECHOICE = "multipleChoice",
  CHECKBOXES = "checkboxes",
}

/**
 * 回答选项
 */
export const answerOptions = [
  { key: answerOptionsEnum.TEXT, label: "Text" },
  { key: answerOptionsEnum.MULTIPLECHOICE, label: "Multiple choice" },
  { key: answerOptionsEnum.CHECKBOXES, label: "Checkboxes" },
];

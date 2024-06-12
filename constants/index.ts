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

export const contractAddress = "0xdD7099FFb56e84657302F1e105451ff7832a1572";

/**
 * 获取默认的question
 * @returns
 */
export const getDefaultQuestion = () => ({
  type: answerOptionsEnum.TEXT,
  name: "Question",
  options: [],
  required: false,
});

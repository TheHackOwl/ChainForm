export enum answerOptionsEnum {
  TEXT = "0",
  MULTIPLECHOICE = "1",
  CHECKBOXES = "2",
}

/**
 * 回答选项
 */
export const answerOptions = [
  { key: answerOptionsEnum.TEXT, label: "Text" },
  { key: answerOptionsEnum.MULTIPLECHOICE, label: "Multiple choice" },
  { key: answerOptionsEnum.CHECKBOXES, label: "Checkboxes" },
];

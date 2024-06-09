import { Action } from "@/lib/redoox";
import { FormDataType, FormBaseInfo, Question } from "@/types/index";

export const prefix = "@form";

export const Type = {
  SaveFormData: `${prefix}/SetFormData`,
  SetFormBaseInfo: `${prefix}/SetFormBaseInfo`,
  SaveQuestionByIndex: `${prefix}/SaveQuestionByIndex`,
  SaveDataByKey: `${prefix}/SaveDataByKey`,
};

export type SetFormData = Action<{ formData: FormDataType }>;

export function saveFormData(formData: FormDataType): SetFormData {
  return {
    type: Type.SaveFormData,
    payload: { formData },
  };
}

export type SaveFormBaseInfo = Action<{ formBaseInfo: FormBaseInfo }>;

export function saveFormBaseInfo(formBaseInfo: FormBaseInfo): SaveFormBaseInfo {
  return {
    type: Type.SetFormBaseInfo,
    payload: { formBaseInfo },
  };
}

export type SaveQuesitionByIndex = Action<{
  index: number;
  question: Question;
}>;

export function saveQuestionByIndex(
  index: number,
  question: Question,
): SaveQuesitionByIndex {
  return {
    type: Type.SaveQuestionByIndex,
    payload: { index, question },
  };
}

export type SaveDataByKey = Action<{
  key: string;
  data: string | Question | number;
}>;
export function saveDataByKey(
  key: string,
  data: string | Question | number,
): SaveDataByKey {
  return {
    type: Type.SaveDataByKey,
    payload: { key, data },
  };
}

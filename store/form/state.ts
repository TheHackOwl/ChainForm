import formTemplate from "@/constants/form-template.json";
import { FormDataType } from "@/types/index";

export interface IState {
  pending: boolean;
  formData: FormDataType;
}

export const InitialState: IState = {
  pending: false,
  formData: formTemplate as FormDataType,
};

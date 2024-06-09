import { IState, InitialState } from "./state";
import * as Actions from "./actions";

import { Action } from "@/lib/redoox";

const ReducerMap = {
  [Actions.Type.SaveFormData]: setFormData,
  [Actions.Type.SetFormBaseInfo]: setFormBaseInfo,
};

export function Reducer(state: IState = InitialState, action: Action) {
  const reducer = ReducerMap[action.type];

  return reducer(state, action);
}

function setFormData(state: IState, { payload }: Actions.SetFormData) {
  return { ...state, formData: payload.formData };
}

function setFormBaseInfo(state: IState, { payload }: Actions.SaveFormBaseInfo) {
  console.log(payload, "payload");

  return { ...state, formData: { ...state.formData, ...payload.formBaseInfo } };
}

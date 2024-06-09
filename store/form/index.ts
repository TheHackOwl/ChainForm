import { Reducer } from "./reducer";
import { InitialState, IState } from "./state";

import { initRedoox } from "@/lib/redoox";

const { Provider, useRedux } = initRedoox(Reducer, InitialState);

export interface IAppState extends IState {}

export { Provider, useRedux };

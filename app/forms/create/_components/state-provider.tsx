"use client";

import React from "react";

import { Provider } from "@/store/form";

interface StateProviderProps {
  children: JSX.Element;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

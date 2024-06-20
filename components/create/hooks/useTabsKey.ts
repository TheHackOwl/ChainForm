import { useState } from "react";
export const tabKeys = ["questions", "settings"];

export interface useTabsKey {
  currentTab: string;
  toNextStep: () => void;
  toPreviousStep: () => void;
}

export const useTabsKey = () => {
  const [currentTab, setCurrentTab] = useState(tabKeys[0]);

  const toNextStep = () => {
    const index = tabKeys.findIndex((item) => item === currentTab);

    if (index == tabKeys.length - 1) return;
    setCurrentTab(tabKeys[index + 1]);
  };

  const toPreviousStep = () => {
    const index = tabKeys.findIndex((item) => item === currentTab);

    if (index == 0) return;
    setCurrentTab(tabKeys[index - 1]);
  };

  return {
    currentTab,
    toNextStep,
    toPreviousStep,
  };
};

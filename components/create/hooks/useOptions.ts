import { useState } from "react";

export interface optionsProps {
  isInvalids: boolean[];
  options: string[];
  updateOptions: (options: string[]) => void;
  updateOptionValue: (index: number, value: string) => void;
  addOption: () => void;
}

export interface useOptionsReturn extends optionsProps {
  verify: () => boolean;
}

export const useOptions = (initialOptions: string[] = []): useOptionsReturn => {
  const [options, setOptions] = useState<string[]>(initialOptions);
  const [isInvalids, setIsInvalids] = useState<boolean[]>([]);
  /**
   * 更新整个 options 数组
   * @param newOptions - 新的 options 数组
   */
  const updateOptions = (newOptions: string[]) => {
    setOptions(newOptions);
  };

  /**
   * 更新特定索引处的 option 值
   * @param index - 要更新的 option 索引
   * @param value - 新的 option 值
   */
  const updateOptionValue = (index: number, value: string) => {
    updateInvalids(index, false);
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];

      newOptions[index] = value;

      return newOptions;
    });
  };

  /**
   * 添加一个新的 option
   */
  const addOption = () => {
    setOptions((prevOptions) => [
      ...prevOptions,
      `option ${prevOptions.length + 1}`,
    ]);
  };

  const verify = () => {
    let isPass = true;

    options.forEach((item, index) => {
      const val = item.trim();

      if (!val) {
        isPass = false;
        updateInvalids(index, true);
      }
    });

    return isPass;
  };

  const updateInvalids = (index: number, isInvalid: boolean) => {
    setIsInvalids((prev) => {
      const newArr = [...prev];

      newArr[index] = isInvalid;

      return newArr;
    });
  };

  return {
    isInvalids,
    options,
    updateOptions,
    updateOptionValue,
    addOption,
    verify,
  };
};

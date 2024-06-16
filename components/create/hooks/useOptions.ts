import { useState } from "react";

export interface optionsProps {
  options: string[];
  updateOptions: (options: string[]) => void;
  updateOptionValue: (index: number, value: string) => void;
  addOption: () => void;
}

export const useOptions = (initialOptions: string[] = []): optionsProps => {
  const [options, setOptions] = useState<string[]>(initialOptions);

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

  return {
    options,
    updateOptions,
    updateOptionValue,
    addOption,
  };
};

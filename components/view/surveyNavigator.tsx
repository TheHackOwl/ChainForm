import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";

import { LeftIcon, RightIcon } from "@/components/icons";
interface SurveyNavigatorProps {
  totalSurveys: number; // 总的问卷数
  initialSurvey?: number; // 可选的初始问卷编号，默认为 1
  onSurveyChange?: (currentSurvey: number) => void; // 当前问卷编号变化时的回调函数
}

export const SurveyNavigator: React.FC<SurveyNavigatorProps> = ({
  totalSurveys,
  initialSurvey = 1,
  onSurveyChange,
}) => {
  // 当前问卷编号的状态
  const [currentSurvey, setCurrentSurvey] = useState<number>(initialSurvey);

  // 当 currentSurvey 变化时，调用 onSurveyChange 回调函数
  useEffect(() => {
    if (onSurveyChange) {
      onSurveyChange(currentSurvey);
    }
  }, [currentSurvey, onSurveyChange]);

  // 处理输入框的变化，确保输入的是合法的问卷编号
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);

      if (!isNaN(value) && value > 0 && value <= totalSurveys) {
        setCurrentSurvey(value);
      }
    },
    [totalSurveys]
  );

  // 处理“上一个”按钮点击事件，确保当前问卷编号在有效范围内
  const handlePrevClick = useCallback(() => {
    if (currentSurvey > 1) {
      setCurrentSurvey((prevSurvey) => prevSurvey - 1);
    }
  }, [currentSurvey]);

  // 处理“下一个”按钮点击事件，确保当前问卷编号在有效范围内
  const handleNextClick = useCallback(() => {
    if (currentSurvey < totalSurveys) {
      setCurrentSurvey((prevSurvey) => prevSurvey + 1);
    }
  }, [currentSurvey, totalSurveys]);

  return (
    <div className="flex items-center justify-center">
      <Button
        isIconOnly
        color="primary"
        disabled={currentSurvey === 1}
        variant="light"
        onPress={handlePrevClick}
      >
        <LeftIcon />
      </Button>
      <Spacer x={1} />
      <div className="flex items-center justify-center">
        <Input
          fullWidth
          className="w-14"
          color="primary"
          type="number"
          value={currentSurvey.toString()} // 将 number 转换为 string
          variant="underlined"
          onChange={handleInputChange}
        />
        <div className="w-8 ml-2">of {totalSurveys}</div>
      </div>
      <Spacer x={1} />
      <Button
        isIconOnly
        color="primary"
        disabled={currentSurvey === totalSurveys}
        variant="light"
        onPress={handleNextClick}
      >
        <RightIcon />
      </Button>
    </div>
  );
};

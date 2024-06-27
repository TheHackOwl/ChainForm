import React from "react";
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
  onSurveyChange = (val: number) => {},
}) => {
  // 处理输入框的变化，确保输入的是合法的问卷编号
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value > 0 && value <= totalSurveys) {
      onSurveyChange(value);
    }
  };

  // 处理“上一个”按钮点击事件，确保当前问卷编号在有效范围内
  const handlePrevClick = () => {
    if (initialSurvey > 1) {
      const surver = initialSurvey - 1;

      onSurveyChange(surver);
    }
  };

  // 处理“下一个”按钮点击事件，确保当前问卷编号在有效范围内
  const handleNextClick = () => {
    if (initialSurvey < totalSurveys) {
      const surver = initialSurvey + 1;

      onSurveyChange(surver);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        isIconOnly
        color="primary"
        disabled={initialSurvey === 1}
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
          value={initialSurvey.toString()} // 将 number 转换为 string
          variant="underlined"
          onChange={handleInputChange}
        />
        <div className="w-8 ml-2">of {totalSurveys}</div>
      </div>
      <Spacer x={1} />
      <Button
        isIconOnly
        color="primary"
        disabled={initialSurvey === totalSurveys}
        variant="light"
        onPress={handleNextClick}
      >
        <RightIcon />
      </Button>
    </div>
  );
};

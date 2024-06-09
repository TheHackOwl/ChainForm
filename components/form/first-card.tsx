"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

import { FormBaseInfo } from "@/types/index";
import { useThrottle } from "@/hooks";

interface FirstCardProps {
  title: string;
  description: string;
  change: (data: FormBaseInfo) => void;
}

export const FirstCard: React.FC<FirstCardProps> = ({
  title,
  description,
  change,
}) => {
  const [titleValue, setTitleValue] = React.useState(title);
  const [descriptionValue, setDescriptionValue] = React.useState(description);

  // 使用自定义的useThrottle Hook Using the custom useThrottle Hook
  const throttledChangeHandler = useThrottle((info: FormBaseInfo) => {
    // 在这里发送事件 Send event here
    change(info);
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue.length == 0) return;
    setTitleValue(() => {
      throttledChangeHandler({
        title: newValue,
        description: descriptionValue,
      });

      return newValue;
    });
  };

  const handleDesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setDescriptionValue(() => {
      throttledChangeHandler({
        title: titleValue,
        description: newValue,
      });

      return newValue;
    });
  };

  return (
    <Card
      isBlurred
      className="p-4 border-s-indigo-500 border-t-indigo-500  border-t-4"
    >
      <CardBody className="overflow-y-visible ">
        <div className="flex w-full">
          <Input
            classNames={{
              inputWrapper: "light:bg-slate-50 h-14",
              input: ["text-2xl"],
              innerWrapper: "",
            }}
            color="primary"
            placeholder="Question"
            size="lg"
            value={titleValue}
            variant="underlined"
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex w-full">
          <Input
            color="primary"
            placeholder="表单说明"
            size="lg"
            value={descriptionValue}
            variant="underlined"
            onChange={handleDesChange}
          />
        </div>
      </CardBody>
    </Card>
  );
};

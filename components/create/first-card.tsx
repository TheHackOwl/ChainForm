"use client";
import React from "react";
import { Input } from "@nextui-org/input";

import { FormBaseInfo } from "@/types/index";
import { useThrottle } from "@/hooks";
import { FormFirstCard } from "@/components/form-ui/form-first-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";
interface FirstCardProps {
  name: string;
  description: string;
  change: (data: FormBaseInfo) => void;
}

export const FirstCard: React.FC<FirstCardProps> = ({
  name,
  description,
  change,
}) => {
  const [titleValue, setTitleValue] = React.useState(name);
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
        name: newValue,
        description: descriptionValue,
      });

      return newValue;
    });
  };

  const handleDesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setDescriptionValue(() => {
      throttledChangeHandler({
        name: titleValue,
        description: newValue,
      });

      return newValue;
    });
  };

  return (
    <FormFirstCard>
      <FormCardBody>
        <div className="flex w-full">
          <Input
            classNames={{
              inputWrapper: "light:bg-slate-50 h-14",
              input: ["text-3xl"],
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
            classNames={{
              input: ["text-base text-gray-600"],
            }}
            color="primary"
            placeholder="Form description"
            size="lg"
            value={descriptionValue}
            variant="underlined"
            onChange={handleDesChange}
          />
        </div>
      </FormCardBody>
    </FormFirstCard>
  );
};

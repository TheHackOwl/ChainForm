"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@nextui-org/input";

import { FormBaseInfo } from "@/types/index";
import { useThrottle } from "@/hooks";
import { FormFirstCard } from "@/components/form-ui/form-first-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import { VerifyMethods } from "@/hooks";
interface FirstCardProps extends VerifyMethods {
  name: string;
  description: string;
  change: (data: FormBaseInfo) => void;
}

export const FirstCard: React.FC<FirstCardProps> = ({
  name,
  description,
  change,
  register,
  unregister,
}) => {
  const cardIdRef = useRef<string>("firstCard-" + Date.now());
  const [titleValue, setTitleValue] = useState(name);
  const [isInvalid, setIsInvalid] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(description);

  useEffect(() => {
    register(cardIdRef.current, verifyCardValue);

    return () => {
      unregister(cardIdRef.current);
    };
  }, [titleValue]);

  // 使用自定义的useThrottle Hook Using the custom useThrottle Hook
  const throttledChangeHandler = useThrottle((info: FormBaseInfo) => {
    // 在这里发送事件 Send event here
    change(info);
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setIsInvalid(false);
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

  const verifyCardValue = () => {
    if (!titleValue.trim()) {
      setIsInvalid(true);

      return false;
    }

    return true;
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
            errorMessage="The form title cannot be empty"
            isInvalid={isInvalid}
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

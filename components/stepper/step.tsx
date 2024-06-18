"use client";
import React, { useMemo } from "react";
import clsx from "clsx";

import { CompleteIcon } from "@/components/icons";

export const componentName = "Step";

export type Status = "complete" | "active" | "inactive";

export type OnStepchangeType = (step: number) => void;

export interface StepStatusStyle {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface StepProps {
  children: React.ReactNode;
  index?: number;
  isLastChild?: boolean;
  status?: Status;
  stepNumber?: number;
  onStepChange?: OnStepchangeType;
}

// 转换后的 React 样式对象
const styles: {
  completeStyle: StepStatusStyle;
  activeStyle: StepStatusStyle;
  inactiveStyle: StepStatusStyle;
} = {
  completeStyle: {
    backgroundColor: "var(--complete-background-color)",
    borderColor: "var(--complete-border-color)",
    color: "rgb(255, 255, 255)",
  },
  activeStyle: {
    backgroundColor: "transparent",
    borderColor: "var(--active-border-color)",
    color: "var(--active-color)",
  },
  inactiveStyle: {
    backgroundColor: "transparent",
    borderColor: "var(--inactive-border-color)",
    color: "var(--inactive-color)",
  },
};

export const Step: React.FC<StepProps> = ({
  index,
  isLastChild,
  status = "inactive",
  stepNumber,
  children,
  onStepChange,
}) => {
  const style = useMemo((): StepStatusStyle => {
    return styles[`${status}Style`];
  }, [status]);

  const isComplete = useMemo(() => status === "complete", [status]);

  const lineCalsses = clsx(
    "relative h-0.5 w-full bg-default-200 transition-colors duration-300 after:absolute after:block after:h-full after:bg-[var(--active-border-color)] after:transition-[width] after:duration-300 after:content-['']",
    {
      "after:w-0": !isComplete,
      "after:w-full": isComplete,
    }
  );

  const handleStepChange = () => {
    if (onStepChange) {
      onStepChange(index as number);
    }
  };

  return (
    <li className="relative flex w-full max-w-[120px] items-center">
      <button
        aria-current="step"
        className="group flex w-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-large py-2.5"
        onClick={handleStepChange}
      >
        <div className="h-ful relative flex items-center">
          <div className="relative">
            <div
              className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full border-medium text-large font-semibold text-default-foreground"
              style={style}
            >
              <div className="flex items-center justify-center">
                {isComplete ? (
                  <CompleteIcon className="h-6 w-6 text-[var(--active-fg-color)]" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
            </div>
          </div>
          {!isLastChild && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-1/2 flex w-8 -translate-y-1/2 translate-x-1/2 items-center sm:w-12"
            >
              <div className={lineCalsses} />
            </div>
          )}
        </div>
        <div className="w-[100px] flex-1 px-2 text-center lg:max-w-[120px]">
          <div className="line-clamp-2 text-small font-medium text-default-foreground transition-[color,opacity] duration-300 group-active:opacity-80 lg:text-medium">
            {children}
          </div>
        </div>
      </button>
    </li>
  );
};

Step.displayName = componentName;

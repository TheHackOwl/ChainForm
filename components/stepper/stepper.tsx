"use client";
import React, { useCallback } from "react";
import clsx from "clsx";

import { componentName, StepProps, Status, OnStepchangeType } from "./step";

interface StepperProps {
  activeStep?: number;
  children: React.ReactNode;
  onStepChange?: OnStepchangeType;
}

export const Stepper: React.FC<StepperProps> = ({
  children,
  activeStep = 0,
  onStepChange = () => {},
}) => {
  const classes = clsx(
    "flex flex-row flex-nowrap overflow-x-scroll no-scrollbar [--step-color:var(--nextui-primary)] [--step-fg-color:var(--nextui-primary-foreground)] [--active-fg-color:hsl(var(--step-fg-color))] [--active-border-color:hsl(var(--step-color))] [--active-color:hsl(var(--step-color))] [--complete-background-color:hsl(var(--step-color))] [--complete-border-color:hsl(var(--step-color))] [--inactive-border-color:hsl(var(--nextui-default-300))] [--inactive-color:hsl(var(--nextui-default-300))]"
  );

  const getStaus = useCallback(
    (index: number): Status => {
      if (index === activeStep) {
        return "active";
      } else if (index < activeStep) {
        return "complete";
      } else {
        return "inactive";
      }
    },
    [activeStep]
  );

  const renderChildren = () => {
    const childArray = React.Children.toArray(children);
    const validChildren = childArray.filter((child) => {
      const childElement = child as React.FunctionComponentElement<StepProps>;

      return (
        React.isValidElement(child) && childElement.type.name === componentName
      );
    });

    const validChildrenCount = validChildren.length;

    return React.Children.map(validChildren, (child, index) => {
      if (React.isValidElement(child)) {
        const childElement = child as React.FunctionComponentElement<StepProps>;

        const isLastChild = index === validChildrenCount - 1;

        return React.cloneElement(childElement, {
          index: index,
          isLastChild,
          status: getStaus(index),
          stepNumber: index + 1,
          onStepChange: onStepChange,
        });
      }

      return child;
    });
  };

  return (
    <nav aria-label="Progress" className="max-w-fit">
      <ol className={classes}>{renderChildren()}</ol>
    </nav>
  );
};

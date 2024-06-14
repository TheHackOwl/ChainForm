import React from "react";
import { Card } from "@nextui-org/card";
import clsx from "clsx";

interface FormCard {
  children: React.ReactNode;
  selected?: boolean;
}

export const FormCard: React.FC<FormCard> = ({ children, selected }) => {
  const cardclasses = clsx("p-4  border-l-4", {
    "border-s-indigo-500": selected,
  });

  return (
    <Card isBlurred className={cardclasses}>
      {children}
    </Card>
  );
};

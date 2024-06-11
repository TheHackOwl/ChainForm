import React from "react";
import { Card } from "@nextui-org/card";
import clsx from "clsx";

import { useFocus } from "@/hooks/index";

interface FormCard {
  children: React.ReactNode;
}

export const FormCard: React.FC<FormCard> = ({ children }) => {
  const [focuseRef, isFocused] = useFocus<HTMLDivElement>();
  const cardclasses = clsx("p-4  border-l-4", {
    "border-s-indigo-500": isFocused,
  });

  return (
    <Card ref={focuseRef} isBlurred className={cardclasses}>
      {children}
    </Card>
  );
};

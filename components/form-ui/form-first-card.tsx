import React from "react";
import { Card } from "@nextui-org/card";

interface FormFirstCard {
  children: React.ReactNode;
}

export const FormFirstCard: React.FC<FormFirstCard> = ({ children }) => {
  return (
    <Card
      isBlurred
      className="p-4 border-s-indigo-500 border-t-indigo-500  border-t-4"
    >
      {children}
    </Card>
  );
};

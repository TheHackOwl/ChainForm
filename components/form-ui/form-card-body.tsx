import { CardBody } from "@nextui-org/card";
import React from "react";

interface FormCardBodyProps {
  children: React.ReactNode;
}

export const FormCardBody: React.FC<FormCardBodyProps> = ({ children }) => {
  return <CardBody className="overflow-y-visible">{children}</CardBody>;
};

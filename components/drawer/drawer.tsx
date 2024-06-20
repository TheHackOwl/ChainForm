"use client";
import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { Card, CardBody } from "@nextui-org/card";

import { DynamicBackdrop } from "@/components/backdrop";
import { RightArrowIcon } from "@/components/icons";
interface DrawerProps {
  className?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  className,
  children,
  onClose,
}) => {
  const classes = clsx(
    "flex fixed top-0 z-50 right-0 h-screen w-auto text-white transform transition-transform duration-300 ease-in-out",
    className,
    {
      "translate-x-0": isOpen,
      "translate-x-full": !isOpen,
    }
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={classes}>
      <div
        className="w-9 rounded-s-2xl cursor-pointer bg-[#f5f5f5] hover:opacity-100 opacity-50 h-full flex justify-center pt-4"
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={handleKeyDown}
      >
        <RightArrowIcon />
      </div>
      <Card className="w-96 h-full" radius="none" shadow="lg">
        <CardBody className="p-0">{children}</CardBody>
      </Card>
      <DynamicBackdrop isVisible={isOpen} onClick={onClose} />
    </div>,
    document.querySelector("body") as HTMLElement
  );
};

export default Drawer;

// Backdrop.tsx
import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
interface BackdropProps {
  isVisible: boolean;
  className?: string;
  onClick: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({
  isVisible,
  className,
  onClick,
}) => {
  if (!isVisible) return null;

  const classes = clsx("fixed z-40 inset-0 bg-black bg-opacity-30", className);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };

  return ReactDOM.createPortal(
    <div
      aria-label="Close backdrop"
      className={classes}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    />,
    document.querySelector("body") as HTMLElement
  );
};

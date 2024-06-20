import React from "react";
import clsx from "clsx";

interface RequireStarProps {
  className?: string;
  isDisabled?: boolean;
}
export const RequireStar: React.FC<RequireStarProps> = ({
  className,
  isDisabled,
}) => {
  const classes = clsx("text-xs align-top", className, {
    "text-red-500": !isDisabled,
    "text-red-500/50": isDisabled,
  });

  return <span className={classes}>*</span>;
};

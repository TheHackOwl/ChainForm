import React, { forwardRef } from "react";
import { Button, ButtonProps } from "@nextui-org/button";

import { ShareIcon } from "@/components/icons";
interface ShareButtonProps extends ButtonProps {}

export const ShareButton = forwardRef<HTMLButtonElement, ShareButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        startContent={<ShareIcon />}
        variant="bordered"
        {...props}
      >
        Share
      </Button>
    );
  }
);

ShareButton.displayName = "ShareButton";

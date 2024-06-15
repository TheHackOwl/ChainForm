import React from "react";

import { SetFormSettings } from "@/components/settings/set-form-settings";
import { SetFormIncentive } from "@/components/settings/set-form-incentive";
import { cardGap } from "@/components/primitives";
export const Settings: React.FC = () => {
  return (
    <div className={cardGap()}>
      <SetFormSettings />
      <SetFormIncentive />
    </div>
  );
};

import React from "react";

import { SetFormSettings } from "@/components/settings/set-form-settings";
import { SetFormIncentive } from "@/components/settings/set-form-incentive";
import { cardGap } from "@/components/primitives";
import { RewardRule, IntSettings, Token } from "@/types";
interface SettingsProps {
  rewardRule: RewardRule;
  disabled: boolean;
  expireAt: number;
  setExpireAt?: (expireAt: number) => void;
  setInitSettings?: (intSettings: IntSettings) => void;
  setToken?: (token: Token) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  rewardRule,
  expireAt,
  disabled = false,
  setExpireAt = () => {},
  setToken = () => {},
  setInitSettings = () => {},
}) => {
  return (
    <div className={cardGap()}>
      <SetFormSettings
        expireAt={expireAt}
        idDisabled={disabled}
        setExpireAt={setExpireAt}
      />
      <SetFormIncentive
        disabled={disabled}
        rewardRule={rewardRule}
        setInitSettings={setInitSettings}
        setToken={setToken}
      />
    </div>
  );
};

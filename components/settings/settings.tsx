import React from "react";

import { SetFormSettings } from "@/components/settings/set-form-settings";
import { SetFormIncentive } from "@/components/settings/set-form-incentive";
import { cardGap } from "@/components/primitives";
import { RewardRule, IntSettings, Token } from "@/types";
interface SettingsProps {
  rewardRule: RewardRule;
  disabled: boolean;
  expireAt: number;
  isPublic: boolean;
  setExpireAt?: (expireAt: number) => void;
  setInitSettings?: (intSettings: IntSettings) => void;
  setToken?: (token: Token) => void;
  setRewardLogic?: (address: `0x${string}`) => void;
  setPublic?: (val: boolean) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  rewardRule,
  expireAt,
  disabled = false,
  isPublic,
  setExpireAt = () => {},
  setToken = () => {},
  setInitSettings = () => {},
  setRewardLogic = () => {},
  setPublic = () => {},
}) => {
  return (
    <div className={cardGap()}>
      <SetFormSettings
        expireAt={expireAt}
        idDisabled={disabled}
        isPublic={isPublic}
        setExpireAt={setExpireAt}
        setPublic={setPublic}
      />
      <SetFormIncentive
        disabled={disabled}
        rewardRule={rewardRule}
        setInitSettings={setInitSettings}
        setRewardLogic={setRewardLogic}
        setToken={setToken}
      />
    </div>
  );
};

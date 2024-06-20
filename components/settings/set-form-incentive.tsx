"use client";
import React from "react";

import { IncentiveSelector } from "./incentive-selector";
import { FixedIncentiveInput } from "./fixed-incentive-input";
import { useIntSettings } from "./hooks/useIntSettings";
import { useRewardOptions } from "./hooks/useRewardOptions";

import { CryptoInput } from "@/components/crypto-input";
import { SettingCard } from "@/components/form-ui/setting-card";
import { RewardRule, IntSettings, Token } from "@/types";
interface SetFormIncentiveProps {
  rewardRule: RewardRule;
  disabled: boolean;
  setRewardLogic: (address: `0x${string}`) => void;
  setInitSettings: (intSettings: IntSettings) => void;
  setToken: (token: Token) => void;
}

export const SetFormIncentive: React.FC<SetFormIncentiveProps> = ({
  rewardRule,
  disabled,
  setRewardLogic,
  setInitSettings,
}) => {
  const { token, intSettings } = rewardRule;
  const { amount, users, setAmount, setUsers } = useIntSettings(
    intSettings,
    setInitSettings
  );

  const {
    description,
    selectedRewardType,
    rewardOptions,
    setSelectedRewardType,
  } = useRewardOptions(setRewardLogic);

  return (
    <SettingCard title="Reward">
      <div className="flex p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex-1">
          <IncentiveSelector
            description={description}
            isDisabled={disabled}
            rewardOptions={rewardOptions}
            value={selectedRewardType}
            onChange={setSelectedRewardType}
          />
        </div>
        <div className="flex-1">
          {[2, 3].includes(selectedRewardType) && (
            // <EthInput value={amount} onChange={setAmount} />
            <CryptoInput
              isRequired
              color="primary"
              decimalPlaces={9}
              isDisabled={disabled}
              label="Amount by each user"
              placeholder="Enter amount"
              value={amount}
              variant="underlined"
              onValueChange={setAmount}
            />
          )}
          {selectedRewardType === 2 && (
            <FixedIncentiveInput
              isDisabled={disabled}
              value={users}
              onChange={setUsers}
            />
          )}
        </div>
      </div>
    </SettingCard>
  );
};

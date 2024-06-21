"use client";
import React, { useEffect } from "react";

import { IncentiveSelector } from "./incentive-selector";
import { PersonNumberInput } from "./person-number-input";
import { RateInput } from "./rate-input";
import { useIntSettings } from "./hooks/useIntSettings";
import {
  useRewardOptions,
  RewardArgsNumberType,
} from "./hooks/useRewardOptions";

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

  const {
    description,
    selectedRewardType,
    rewardOptions,
    setSelectedRewardType,
  } = useRewardOptions(
    disabled ? (intSettings.length as RewardArgsNumberType) : 2,
    setRewardLogic
  );

  const { amount, users, rate, setArgsNumber, setAmount, setUsers, setRate } =
    useIntSettings(intSettings, setInitSettings);

  useEffect(() => {
    setArgsNumber(selectedRewardType);
  }, [selectedRewardType]);

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
            <>
              <CryptoInput
                isRequired
                allowEmpty={false}
                color="primary"
                decimalPlaces={9}
                isDisabled={disabled}
                label="Amount by each person"
                placeholder="Enter amount"
                value={amount}
                variant="underlined"
                onValueChange={setAmount}
              />
              <PersonNumberInput
                isDisabled={disabled}
                value={users}
                onChange={setUsers}
              />
            </>
          )}
          {selectedRewardType === 3 && (
            <RateInput isDisabled={disabled} value={rate} onChange={setRate} />
          )}
        </div>
      </div>
    </SettingCard>
  );
};

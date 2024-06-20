"use client";
import React, { useState } from "react";

import { IncentiveSelector, IncentiveType } from "./incentive-selector";
import { FixedIncentiveInput } from "./fixed-incentive-input";
import { useIntSettings } from "./hooks/useIntSettings";

import { CryptoInput } from "@/components/crypto-input";
import { SettingCard } from "@/components/form-ui/setting-card";
import { RewardRule, IntSettings, Token } from "@/types";
interface SetFormIncentiveProps {
  rewardRule: RewardRule;
  disabled: boolean;
  setInitSettings: (intSettings: IntSettings) => void;
  setToken: (token: Token) => void;
}

export const SetFormIncentive: React.FC<SetFormIncentiveProps> = ({
  rewardRule,
  disabled,
  setInitSettings,
}) => {
  const { token, intSettings } = rewardRule;
  const { amount, users, setAmount, setUsers } = useIntSettings(
    intSettings,
    setInitSettings
  );

  const [selectedIncentive, setSelectedIncentive] =
    useState<IncentiveType>("fixed");

  const handleSelection = (incentive: IncentiveType) => {
    if (!incentive) return;
    setSelectedIncentive(incentive);
  };

  return (
    <SettingCard title="Incentive">
      <div className="flex p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex-1">
          <IncentiveSelector
            isDisabled={disabled}
            value={selectedIncentive}
            onChange={handleSelection}
          />
        </div>
        <div className="flex-1">
          {["fixed", "random"].includes(selectedIncentive) && (
            // <EthInput value={amount} onChange={setAmount} />
            <CryptoInput
              isRequired
              color="primary"
              decimalPlaces={9}
              isDisabled={disabled}
              label="Amount of eth by each user"
              placeholder="Enter amount"
              value={amount}
              variant="underlined"
              onValueChange={setAmount}
            />
          )}
          {selectedIncentive === "fixed" && (
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

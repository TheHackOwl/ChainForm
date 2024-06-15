"use client";
import React, { useState } from "react";

import { IncentiveSelector, IncentiveType } from "./incentive-selector";
import { FixedIncentiveInput } from "./fixed-incentive-input";
import { EthInput } from "./eth-input";

import { SettingCard } from "@/components/form-ui/setting-card";

export const SetFormIncentive: React.FC = () => {
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
            value={selectedIncentive}
            onChange={handleSelection}
          />
        </div>
        <div className="flex-1">
          {["fixed", "random"].includes(selectedIncentive) && (
            <EthInput onChange={() => {}} />
          )}
          {selectedIncentive === "fixed" && (
            <FixedIncentiveInput onChange={() => {}} />
          )}
        </div>
      </div>
    </SettingCard>
  );
};

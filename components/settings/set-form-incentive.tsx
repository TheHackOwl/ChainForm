"use client";
import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { toast } from "react-hot-toast";

import { IncentiveSelector } from "./incentive-selector";
import { PersonNumberInput } from "./person-number-input";
import { RateInput } from "./rate-input";
import { useIntSettings } from "./hooks/useIntSettings";
import {
  useRewardOptions,
  RewardArgsNumberType,
} from "./hooks/useRewardOptions";

import { VerifyMethods } from "@/hooks";
import {} from "@/lib/utils";

import { CryptoInput } from "@/components/crypto-input";
import { SettingCard } from "@/components/form-ui/setting-card";
import { RewardRule, IntSettings, Token } from "@/types";
import { CopyIcon } from "@/components/icons";
interface SetFormIncentiveProps extends Partial<VerifyMethods> {
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
  register,
  unregister,
}) => {
  const idRef = useRef<string>("reward-" + Date.now());
  const { token, intSettings } = rewardRule;

  const {
    description,
    selectedRewardType,
    rewardOptions,
    contractAddress,
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

  useEffect(() => {
    if (register) register(idRef.current, verify);

    return () => {
      if (unregister) unregister(idRef.current);
    };
  }, [amount, users, rate]);

  const verify = () => {
    return true;
  };

  /**
   * 拷贝地址
   * @param text
   */
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast.success("Address copied to clipboard !");
    } catch (err) {
      toast.error("Copy failed !");
    }
  };

  return (
    <SettingCard title="Reward">
      <div className="flex p-4 bg-gray-100 rounded-lg shadow">
        <div className="basis-[53%]">
          <IncentiveSelector
            description={description}
            isDisabled={disabled}
            rewardOptions={rewardOptions}
            value={selectedRewardType}
            onChange={setSelectedRewardType}
          />
          <div
            className={clsx("p-1 text-tiny", {
              "text-foreground-400": !disabled,
              "text-foreground-400/70": disabled,
            })}
          >
            <div>The reward contract address:</div>
            <div className="flex">
              {contractAddress}
              <CopyIcon
                className="ml-1 cursor-pointer"
                height={12}
                width={12}
                onClick={copyAddress}
              />
            </div>
          </div>
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

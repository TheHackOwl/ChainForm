import { useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";

import { IntSettings } from "@/types";

export interface useIntSettingsReturn {
  amount: string;
  users: string;
  setArgsNumber: (argsNumber: number) => void;
  setAmount: (value: string) => void;
  setUsers: (value: string) => void;
  getIntSettings: () => IntSettings;
}

export const useIntSettings = (
  intSettings: IntSettings,
  setInitSettings: (intSttings: IntSettings) => void,
) => {
  const [argsNumber, setArgsNumber] = useState<number>(intSettings.length);

  const [amount, setAmount] = useState<string>(() => {
    return formatEther(intSettings[0], "wei");
  });
  const [users, setUsers] = useState<string>(() => {
    return intSettings[1].toString();
  });

  const [rate, setRate] = useState<string>(() => {
    return intSettings[2] ? intSettings[2].toString() : "0";
  });

  useEffect(() => {
    setInitSettingsProxy(parseEther(amount), BigInt(users), BigInt(rate));
  }, [argsNumber]);

  const setAmountProxy = (amount: string) => {
    setAmount(amount);
    setInitSettingsProxy(parseEther(amount), BigInt(users), BigInt(rate));
  };

  const setUsersProxy = (usersVal: string) => {
    setUsers(usersVal);
    setInitSettingsProxy(parseEther(amount), BigInt(usersVal), BigInt(rate));
  };

  const setRateProxy = (rateVal: string) => {
    setRate(rateVal);
    setInitSettingsProxy(parseEther(amount), BigInt(users), BigInt(rateVal));
  };

  const getIntSettings = (): IntSettings => {
    return [parseEther(amount, "gwei"), BigInt(users)];
  };

  const setInitSettingsProxy = (...rest: bigint[]) => {
    const newList = rest.splice(0, argsNumber);

    setInitSettings(newList);
  };

  return {
    amount,
    users,
    rate,
    setArgsNumber,
    setAmount: setAmountProxy,
    setUsers: setUsersProxy,
    setRate: setRateProxy,
    getIntSettings,
  };
};

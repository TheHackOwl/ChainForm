import { useState } from "react";
import { formatEther, parseEther } from "viem";

import { IntSettings } from "@/types";

export interface useIntSettingsReturn {
  amount: string;
  users: string;
  setAmount: (value: string) => void;
  setUsers: (value: string) => void;
  getIntSettings: () => IntSettings;
}

export const useIntSettings = (
  intSettings: IntSettings,
  setInitSettings: (intSttings: IntSettings) => void,
) => {
  const [amount, setAmount] = useState<string>(() => {
    return formatEther(intSettings[0], "wei");
  });
  const [users, setUsers] = useState<string>(() => {
    return intSettings[1].toString();
  });

  const setAmountProxy = (amount: string) => {
    setAmount(amount);
    setInitSettings([parseEther(amount), BigInt(users)]);
  };

  const setUsersProxy = (usersVal: string) => {
    setUsers(usersVal);
    setInitSettings([parseEther(amount), BigInt(usersVal)]);
  };

  const getIntSettings = (): IntSettings => {
    return [parseEther(amount, "gwei"), BigInt(users)];
  };

  return {
    amount,
    users,
    setAmount: setAmountProxy,
    setUsers: setUsersProxy,
    getIntSettings,
  };
};

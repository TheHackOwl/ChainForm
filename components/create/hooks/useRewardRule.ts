import { useState } from "react";

import { RewardRule, IntSettings, Token } from "@/types";

export interface UseRewardRuleReturn {
  rewardRule: RewardRule;
  intSettings: IntSettings;
  setToken: (token: Token) => void;
  setInitSettings: (settings: IntSettings) => void;
}

export const useRewardRule = (rewardRule: RewardRule): UseRewardRuleReturn => {
  const [intSettings, setInitSettings] = useState<IntSettings>(() =>
    rewardRule.intSettings.map((item) => BigInt(item)),
  );
  const [token, setToken] = useState<Token>(rewardRule.token);

  return {
    rewardRule: {
      intSettings,
      token,
    },
    intSettings: intSettings,
    setToken,
    setInitSettings,
  };
};

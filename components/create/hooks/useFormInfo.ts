import { useState } from "react";

import { FormBaseInfo } from "@/types";

export const useFormInfo = (initialBaseInfo: FormBaseInfo) => {
  const [baseInfo, setBaseInfo] = useState<FormBaseInfo>(initialBaseInfo);

  const updateBaseInfo = (newBaseInfo: FormBaseInfo) => {
    setBaseInfo((prevBaseInfo) => ({ ...prevBaseInfo, ...newBaseInfo }));
  };

  return {
    baseInfo,
    updateBaseInfo,
  };
};

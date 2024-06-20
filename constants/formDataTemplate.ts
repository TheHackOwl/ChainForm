import {
  getLocalTimeZone,
  CalendarDateTime,
  toZoned,
  today,
} from "@internationalized/date";

import { FIXEDREWARD_ADDRESS } from "./contract/fixedReward";

import { FormDataType, SettingsType } from "@/types";

export const getFormDataTemplate = (): FormDataType => {
  return {
    name: "Untitled form",
    description: "",
    questions: [
      {
        type: "multipleChoice",
        name: "Untitled Question",
        options: ["Option 1"],
        required: false,
      },
    ],
  };
};

export const getSettingsTemplate = (): SettingsType => {
  // 获取当前时区
  const timeZone = getLocalTimeZone();

  const { year, month, day } = today(timeZone);

  // 创建一个指定时间的 CalendarDateTime 对象
  const specifiedTime = new CalendarDateTime(year, month, day, 23, 59);

  // 将 CalendarDateTime 转换为 ZonedDateTime
  const zonedSpecifiedTime = toZoned(specifiedTime, timeZone);

  // 获取时间戳（毫秒）
  const timestamp = zonedSpecifiedTime.toDate().getTime();

  return {
    expireAt: BigInt(timestamp),
    rewardLogic: FIXEDREWARD_ADDRESS,
    rewardRule: {
      intSettings: [BigInt(1000000000), BigInt(10)],
      token: "0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475",
    },
  };
};

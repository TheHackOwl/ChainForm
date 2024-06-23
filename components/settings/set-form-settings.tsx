import React, { useState } from "react";
import clsx from "clsx";
import { DateInput } from "@nextui-org/date-input";
import { Switch } from "@nextui-org/switch";
import {
  getLocalTimeZone,
  now,
  ZonedDateTime,
  fromAbsolute,
} from "@internationalized/date";

import { SettingCard } from "@/components/form-ui/setting-card";

export type ValidationError = string | string[];

interface SetFormSettingsProps {
  expireAt: number;
  idDisabled?: boolean;
  isPublic: boolean;
  setExpireAt: (expireAt: number) => void;
  setPublic?: (val: boolean) => void;
}

export const SetFormSettings: React.FC<SetFormSettingsProps> = ({
  expireAt,
  idDisabled,
  isPublic,
  setExpireAt,
  setPublic,
}) => {
  const [validated, setValidated] = useState<boolean>(true);
  const validateDeadline = (
    date: ZonedDateTime
  ): true | ValidationError | null | undefined => {
    if (idDisabled) return true;

    const localTimeZone = getLocalTimeZone();
    const currentDateTime = now(localTimeZone);

    if (date.compare(currentDateTime) > 0) {
      setValidated(true);

      return true;
    } else {
      setValidated(false);

      return ["The deadline must be in the future."];
    }
  };

  const handleChange = (zonedDateTime: ZonedDateTime) => {
    setExpireAt(zonedDateTime.toDate().getTime());
  };

  return (
    <SettingCard title="Settings">
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex-1">
          <div
            className={clsx("text-lg font-semibold", {
              "text-gray-800": !idDisabled,
              "text-gray-800/50": idDisabled,
            })}
          >
            Public
          </div>
        </div>
        <div className="flex-1">
          <Switch
            isDisabled={idDisabled}
            isSelected={isPublic}
            onValueChange={setPublic}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex-1">
          <div
            className={clsx("text-lg font-semibold", {
              "text-gray-800": !idDisabled,
              "text-gray-800/50": idDisabled,
            })}
          >
            Deadline Time
          </div>
          <div className="text-sm text-gray-500">
            Set the deadline for this form
          </div>
        </div>
        <div className="flex-1">
          <DateInput
            hideTimeZone
            isRequired
            isDisabled={idDisabled}
            label="Input Deadline"
            validate={validateDeadline}
            value={fromAbsolute(expireAt, getLocalTimeZone())}
            onChange={handleChange}
          />
        </div>
      </div>
    </SettingCard>
  );
};

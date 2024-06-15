import React from "react";
import { DateInput } from "@nextui-org/date-input";
import { getLocalTimeZone, now, ZonedDateTime } from "@internationalized/date";

import { SettingCard } from "@/components/form-ui/setting-card";
import { RequireStar } from "@/components/require-star";

export type ValidationError = string | string[];

export const SetFormSettings: React.FC = () => {
  const validateDeadline = (
    date: ZonedDateTime
  ): true | ValidationError | null | undefined => {
    const localTimeZone = getLocalTimeZone();
    const currentDateTime = now(localTimeZone);

    if (date.compare(currentDateTime) > 0) {
      return true;
    } else {
      return ["The deadline must be in the future."];
    }
  };

  return (
    <SettingCard title="Settings">
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex-1">
          <div className="text-lg font-semibold text-gray-800">
            Deadline Time <RequireStar />
          </div>
          <div className="text-sm text-gray-500">
            Set the deadline for this form
          </div>
        </div>
        <div className="flex-1">
          <DateInput
            hideTimeZone
            isRequired
            defaultValue={now(getLocalTimeZone()).set({
              hour: 23,
              minute: 59,
            })}
            label="Input Deadline"
            validate={validateDeadline}
          />
        </div>
      </div>
    </SettingCard>
  );
};

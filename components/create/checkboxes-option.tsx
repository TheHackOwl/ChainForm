import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { optionsProps } from "./hooks/useOptions";

import { DeleteIcon } from "@/components/icons";

export type ValidationError = string | string[];
interface CheckboxesOptionProps extends optionsProps {}

export const CheckboxesOption: React.FC<CheckboxesOptionProps> = ({
  options = [],
  isInvalids,
  updateOptions,
  updateOptionValue,
  addOption,
}) => {
  return (
    <div className="grid gap-y-4">
      {options.map((item, index) => {
        return (
          <div key={index} className="flex">
            <Checkbox isDisabled radius="none" />
            <Input
              color="primary"
              errorMessage={"The option value cannot be empty"}
              isInvalid={isInvalids[index] || false}
              value={item}
              variant="underlined"
              onChange={(e) => {
                updateOptionValue(index, e.target.value);
              }}
            />
            <div className="w-20 flex items-center justify-center">
              {options.length > 1 && (
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={() =>
                    updateOptions(options.filter((_, i) => i !== index))
                  }
                >
                  <DeleteIcon />
                </Button>
              )}
            </div>
          </div>
        );
      })}
      <div className="flex">
        <Checkbox isDisabled radius="none" />

        <Button color="primary" variant="light" onClick={addOption}>
          Add option
        </Button>
      </div>
    </div>
  );
};

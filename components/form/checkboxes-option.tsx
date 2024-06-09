import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { DeleteIcon } from "@/components/icons";
interface CheckboxesOptionProps {
  options: string[];
  changeOptions: (options: string[]) => void;
  optionValueChange: (index: number, value: string) => void;
  addOption: () => void;
}

export const CheckboxesOption: React.FC<CheckboxesOptionProps> = ({
  options = [],
  changeOptions,
  optionValueChange,
  addOption,
}) => {
  const hanleChange = (index: number, value: string) => {
    if (value.length == 0) return;
    optionValueChange(index, value);
  };

  return (
    <div className="grid gap-y-4">
      {options.map((item, index) => {
        return (
          <div key={index} className="flex">
            <Checkbox isDisabled radius="none" />
            <Input
              color="primary"
              value={item}
              variant="underlined"
              onChange={(e) => {
                hanleChange(index, e.target.value);
              }}
            />
            <div className="w-20 flex items-center justify-center">
              {options.length > 1 && (
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={() =>
                    changeOptions(options.filter((_, i) => i !== index))
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

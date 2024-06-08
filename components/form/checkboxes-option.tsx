import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { DeleteIcon } from "@/components/icons";

interface CheckboxesOptionProps {}

export const CheckboxesOption: React.FC<CheckboxesOptionProps> = () => {
  return (
    <div className="grid gap-y-4">
      <div className="flex">
        <Checkbox isDisabled radius="none" />
        <Input color="primary" variant="underlined" />
        <div className="w-20 flex items-center justify-center">
          <Button isIconOnly className="bg-transparent">
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div className="flex">
        <Checkbox isDisabled radius="none" />

        <Link
          className="text-sm	light:text-slate-500"
          color="foreground"
          href="#"
          underline="hover"
        >
          Add option
        </Link>
      </div>
    </div>
  );
};

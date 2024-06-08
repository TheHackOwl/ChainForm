import { RadioGroup, Radio } from "@nextui-org/radio";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { DeleteIcon } from "@/components/icons";

interface MultipleChoiceOptionProps {}
export const MultipleChoiceOption: React.FC<MultipleChoiceOptionProps> = () => {
  return (
    <RadioGroup isDisabled aria-label=" ">
      <div className="grid gap-y-4">
        <div className="flex">
          <Radio value="buenos-aires" />
          <Input color="primary" variant="underlined" />
          <div className="w-20 flex items-center justify-center">
            <Button isIconOnly className="bg-transparent">
              <DeleteIcon />
            </Button>
          </div>
        </div>
        <div className="flex">
          <Radio value="2" />
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
    </RadioGroup>
  );
};

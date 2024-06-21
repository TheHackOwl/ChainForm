import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";

interface AnswerCheckboxesProps {
  value: string[];
  options: string[];
  isDisable: boolean;
  onValueChange: (answers: string[]) => void;
}

export const AnswerCheckboxes: React.FC<AnswerCheckboxesProps> = ({
  value,
  options,
  isDisable,
  onValueChange,
}) => {
  return (
    <CheckboxGroup
      isDisabled={isDisable}
      value={value}
      onChange={onValueChange}
    >
      {options.map((item) => {
        return (
          <Checkbox key={item} disabled={isDisable} radius="none" value={item}>
            {item}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

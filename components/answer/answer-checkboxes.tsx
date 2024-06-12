import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";

interface AnswerCheckboxesProps {
  options: string[];
  isDisable: boolean;
  onValueChange: (answers: string[]) => void;
}

export const AnswerCheckboxes: React.FC<AnswerCheckboxesProps> = ({
  options,
  isDisable,
  onValueChange,
}) => {
  return (
    <CheckboxGroup isDisabled={isDisable} onChange={onValueChange}>
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

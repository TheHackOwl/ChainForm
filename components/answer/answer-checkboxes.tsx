import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";

interface AnswerCheckboxesProps {
  options: string[];
}

export const AnswerCheckboxes: React.FC<AnswerCheckboxesProps> = ({
  options,
}) => {
  return (
    <CheckboxGroup>
      {options.map((item) => {
        return (
          <Checkbox key={item} radius="none" value={item}>
            {item}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

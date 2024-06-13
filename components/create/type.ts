export interface optionsProps {
  options: string[];
  updateOptions: (options: string[]) => void;
  updateOptionValue: (index: number, value: string) => void;
  addOption: () => void;
}

import { FormTabs } from "./_components/form-tabs";
import { StateProvider } from "./_components/state-provider";

import template from "@/constants/form-template.json";
import { FormDataType } from "@/types/index";

export default function CreatePage() {
  return (
    <div className="max-w-screen-md m-auto">
      <StateProvider>
        <FormTabs templateData={template as FormDataType} />
      </StateProvider>
    </div>
  );
}

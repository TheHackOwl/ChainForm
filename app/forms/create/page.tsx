import { FormTabs } from "@/components/create/form-tabs";
import template from "@/constants/form-template.json";
import { FormDataType } from "@/types/index";

export default function CreatePage() {
  return (
    <div className="max-w-screen-md m-auto">
      <FormTabs templateData={template as FormDataType} />
    </div>
  );
}

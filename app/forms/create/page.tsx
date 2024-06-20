import { FormTabs } from "@/components/create/form-tabs";
import {
  getFormDataTemplate,
  getSettingsTemplate,
} from "@/constants/formDataTemplate";
export default function CreatePage() {
  return (
    <div className="max-w-screen-md m-auto">
      <FormTabs
        settings={getSettingsTemplate()}
        templateData={getFormDataTemplate()}
      />
    </div>
  );
}

import { ViewTabs } from "@/components/view/view-tabs";

export default function ViewPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return (
    <div className="max-w-screen-md m-auto">
      <ViewTabs id={params.id} />
    </div>
  );
}

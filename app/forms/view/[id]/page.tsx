import { ViewTabs } from "@/components/view/view-tabs";

export default function ViewPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return <ViewTabs id={params.id} />;
}

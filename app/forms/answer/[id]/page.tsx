import { AnswerPage } from "@/components/answer/answer-page";

export default function Page({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return <AnswerPage id={params.id} />;
}

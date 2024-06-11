"use client";
import { useState } from "react";

import { AnswerFirstCard } from "@/components/answer/answer-first-card";
import { AnserCard } from "@/components/answer/answer-card";
import templateData from "@/constants/form-template.json";
import { FormDataType } from "@/types";
export default function AnswerPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  console.log(templateData);
  const [formData, setFormData] = useState<FormDataType>(
    templateData as FormDataType
  );

  return (
    <div className="max-w-screen-md m-auto">
      <div className="grid gap-y-4">
        <AnswerFirstCard
          description={formData.description}
          title={formData.title}
        />
        {formData.questions.map((question, index) => {
          return <AnserCard key={index} question={question} />;
        })}
      </div>
    </div>
  );
}

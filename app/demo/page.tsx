"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";

import * as templateData from "@/constants/form-template.json";
import { saveAnswerForm, getSubmissionById, pingByCid } from "@/app/actions";
export default function Page() {
  const [data, setData] = useState<string | null>(null);
  const [cid, setCid] = useState<string | null>(
    "bagaaieranj32v4ee74ljkzhawxacnc6ido6meug2ha7bhcd3ojhyulxg7syq"
  );
  const handleSave = async () => {
    const formData: any = {
      name: templateData["name"],
      description: templateData["description"],
      questions: templateData["questions"],
    };

    const cid = await saveAnswerForm(formData);

    console.log(cid);
    setCid(cid);
    pingByCid(cid);
  };

  const handleRetrieve = async () => {
    const data = await getSubmissionById(cid!);

    setData(JSON.stringify(data));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button
        color="primary"
        style={{ marginBottom: "1rem" }}
        onClick={handleSave}
      >
        存
      </Button>
      <Button color="secondary" onClick={handleRetrieve}>
        取
      </Button>

      <div>{data}</div>
    </div>
  );
}

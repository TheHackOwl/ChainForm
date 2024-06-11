"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";

import { addJson, getJsonByCid } from "@/lib/helia";

const dddd = { hello: "world22" };

export default function Page() {
  const [cid, setCid] = useState<string>();

  const handleClick = async () => {
    const id = await addJson(dddd);

    console.log(id);

    setCid(id);
  };

  const qu = async () => {
    const data = await getJsonByCid(
      "bagaaierasrcmlp5xhuuqjfwqqkbxdzfqk5kcmprfc5ll2kdx37si22uorz3q"
    );

    console.log(data, "data");
  };

  return (
    <div>
      <Button onClick={handleClick}>增加</Button>
      <Button onClick={qu}>取出来</Button>
    </div>
  );
}

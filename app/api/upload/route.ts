import { NextRequest, NextResponse } from "next/server";

import { AnswerFormType } from "@/types/index";
import { createPinatan } from "@/lib/pinata";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body: AnswerFormType = await req.json();

    console.log("formData:", body);

    // const cid = await addJson<AnswerFormType>(body);
    const pinata = createPinatan();
    const res = await pinata.pinJSONToIPFS(body);

    return NextResponse.json({ cid: res.IpfsHash });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

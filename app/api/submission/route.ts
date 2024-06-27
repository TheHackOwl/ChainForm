import { NextRequest, NextResponse } from "next/server";

import { addJson, getJsonByCid } from "@/lib/helia";
import { AnswerFormType } from "@/types/index";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body: AnswerFormType = await req.json();

    console.log("formData:", body);

    const cid = await addJson<AnswerFormType>(body);

    return NextResponse.json({ cid });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { searchParams } = req.nextUrl;
    const cid = searchParams.get("cid");

    console.log("CID: ", cid);

    if (!cid) {
      return NextResponse.json({ error: "cid is required", code: 500 });
    }

    const formData = await getJsonByCid<AnswerFormType>(cid);

    return NextResponse.json({ data: formData, code: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: error, code: 500 });
  }
};

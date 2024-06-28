import { NextRequest, NextResponse } from "next/server";

import { createPinatan } from "@/lib/pinata";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { searchParams } = req.nextUrl;
    const cid = searchParams.get("cid");

    console.log("CID: ", cid);

    if (!cid) {
      return NextResponse.json({ error: "cid is required", code: 500 });
    }

    const pinata = await createPinatan();
    const res = await pinata.unpin(cid);

    return NextResponse.json({ data: res, code: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: error, code: 500 });
  }
};

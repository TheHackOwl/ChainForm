import { NextRequest, NextResponse } from "next/server";
import { createHelia } from "helia";
import { json } from "@helia/json";
import { CID } from "multiformats/cid";
import { MemoryBlockstore } from "blockstore-core";

import { AnswerFormType } from "@/types/index";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body: AnswerFormType = await req.json();

    console.log("formData:", body);

    // const cid = await addJson<AnswerFormType>(body);
    const blockstore = new MemoryBlockstore();

    const helia = await createHelia({
      blockstore,
    });
    const j = json(helia);

    const cidObj = await j.add(body);

    return NextResponse.json({ cid: cidObj.toString() });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const timeout = 10000;

  try {
    const { searchParams } = req.nextUrl;
    const cidString = searchParams.get("cid");

    console.log("CID: ", cidString);

    if (!cidString) {
      return NextResponse.json({ error: "cid is required", code: 500 });
    }

    const cid = CID.parse(cidString);
    const blockstore = new MemoryBlockstore();

    const helia = await createHelia({
      blockstore,
    });
    const j = json(helia);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      const formData = await j.get(cid, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      return NextResponse.json({ data: formData, code: 200 });
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: error, code: 500 });
  }
};

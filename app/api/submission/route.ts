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
  // 设置超时时间为5秒
  const timeout = 5000;

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(NextResponse.json({ error: "Request Timeout", code: 408 }));
    }, timeout);

    (async () => {
      try {
        const { searchParams } = req.nextUrl;
        const cid = searchParams.get("cid");

        console.log("CID: ", cid);

        if (!cid) {
          clearTimeout(timer); // 清除超时计时器
          resolve(NextResponse.json({ error: "cid is required", code: 500 }));

          return;
        }

        const formData = await getJsonByCid<AnswerFormType>(cid);

        clearTimeout(timer); // 清除超时计时器
        resolve(NextResponse.json({ data: formData, code: 200 }));
      } catch (error) {
        clearTimeout(timer); // 确保在捕获错误时也清除计时器

        console.log(error);
        resolve(NextResponse.json({ msg: error, code: 500 }));
      }
    })();
  });
};

import { NextRequest, NextResponse } from "next/server";
let store = new Map();

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const id = store.values.length + 1;
  const fn = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        store.set(id.toString(), body);
        resolve(true);
      }, 3000);
    });
  };

  await fn();

  return NextResponse.json({
    data: id.toString(),
  });
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  return NextResponse.json({
    data: store.get(id),
  });
};

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    {
      success: true,
      message: "The Api is running...",
    },
    { status: 200 }
  );
};

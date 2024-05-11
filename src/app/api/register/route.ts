import { NextResponse, NextRequest } from "next/server";
import { RegisterSchema } from "@/validations";

export const POST = async (req: Request) => {
  const data = await req.json();
  const result = RegisterSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid data", details: result.error.errors },
      { status: 422 },
    );
  }

  return NextResponse.json({ success: "Data is valid" });
};

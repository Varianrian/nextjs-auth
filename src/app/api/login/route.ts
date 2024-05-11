import { NextResponse, NextRequest } from "next/server";
import * as z from "zod";
import { LoginSchema } from "@/validations";
import { error } from "console";

export const POST = async (req: Request) => {
  const data = await req.json();
  const result = LoginSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid data", details: result.error.errors },
      { status: 422 },
    );
  }

  return NextResponse.json({ success: "Data is valid" });
};

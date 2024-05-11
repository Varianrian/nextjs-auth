import { NextResponse, NextRequest } from "next/server";
import { RegisterSchema } from "@/validations";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const POST = async (req: Request) => {
  const data = await req.json();
  const result = RegisterSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid data", details: result.error.errors },
      { status: 422 },
    );
  }

  const { name, email, password } = result.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return NextResponse.json(
      { error: "Email already in use!" },
      { status: 422 },
    );
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send email verification

  return NextResponse.json({ success: "User created" });
};

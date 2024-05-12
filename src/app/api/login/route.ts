import { NextResponse, NextRequest } from "next/server";
import { LoginSchema } from "@/validations";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const POST = async (req: Request) => {
  const data = await req.json();
  const result = LoginSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid data", details: result.error.errors },
      { status: 422 },
    );
  }

  const { email, password } = result.data;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return NextResponse.json({ success: "User Logged In", user: response }, { status: 200 });
  } catch (e: any) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 },
          );
        default:
          return NextResponse.json(
            { error: "Something went wrong" },
            { status: 400 },
          );
      }
    }
    throw e;
  }
};

"use server";

import { NextResponse, NextRequest } from "next/server";
import { LoginSchema } from "@/validations";
import { signIn } from "@/auth";
import { DEFAULT_REDIRECT_URL } from "@/route";
import { z } from "zod";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  const validate = LoginSchema.safeParse(values);
  if (!validate.success) {
    return { error: "Invalid data", details: validate.error.errors };
  }

  const { email, password } = validate.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT_URL,
    });
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    return { error: "Something went wrong" };
  }
};

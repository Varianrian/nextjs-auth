import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is required and must be a valid email address" }),
  password: z.string().min(1, "Password is required"),
});

import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is required and must be a valid email address" }),
  password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email({
      message: "Email is required and must be a valid email address",
    }),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["password"],
  });

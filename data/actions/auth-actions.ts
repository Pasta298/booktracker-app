"use server";
import { z } from "zod";

const schemaRegister = z
  .object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address" }),
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 symbols" })
      .max(100, { message: "Username must be at most 100 symbols" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(50, { message: "Password must be at most 50 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export async function signUpAction(prevState: any, formData: FormData) {
  const parseResult = schemaRegister.safeParse({
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  })

  if (!parseResult.success) {
    const treeErrors = z.treeifyError(parseResult.error);

    const fieldErrors: Record<string, string[]> = {
      email: treeErrors.properties?.email?.errors || [],
      username: treeErrors.properties?.username?.errors || [],
      password: treeErrors.properties?.password?.errors || [],
      confirmPassword: treeErrors.properties?.confirmPassword?.errors || [],
    };

    return {
      ...prevState,
      zodErrors: fieldErrors,
      message: "Missing Fields"
    };
  }

  const fields = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  }

  // Логіка і тд
  console.log("USER:", fields);

  return { success: true, message: "User registered successfully!", data: fields };
}
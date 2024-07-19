import { CodeIcon } from "lucide-react";
import { z } from "zod";

export const PasswordFormSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "enter a valid email",
    }),
});

export const VerificationCodeSchema = z.object({
  code: z
    .string({
      required_error: "verification code is required",
    })
    .min(6, {
      message: "minimum of 6 characters",
    })
    .max(6, {
      message: "maximum of 6 characters",
    }),
});

export const ResetPasswordFormSchema = z.object({
  code: z
    .string({
      required_error: "code is required",
    })
    .min(6, {
      message: "minimum of 6 characters",
    })
    .max(6, {
      message: "maximum of 6 characters",
    }),
  password: z
    .string({
      required_error: "new password is required",
    })
    .min(8, {
      message: "minimum of 8 characters",
    }),
});

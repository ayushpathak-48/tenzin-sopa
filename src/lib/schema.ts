import { z } from "zod";

export const GetInTouchFormSchema = z.object({
  email: z.string().trim().min(1, { message: "Email is Required" }),
  name: z.string().trim().min(1, { message: "Name is Required" }),
  desired_area: z
    .string()
    .trim()
    .min(1, { message: "Desired Area is Required" }),
  message: z.string().trim().min(1, { message: "Message is Required" }),
});

export type GetInTouchFormSchemaType = z.infer<typeof GetInTouchFormSchema>;

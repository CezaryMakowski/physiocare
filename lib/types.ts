import { z } from "zod";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

export const sendData = z.object({
  email: z.email("formErrors.email"),
  name: z
    .string()
    .max(20, "formErrors.name.max")
    .min(1, "formErrors.name.required"),
  message: z.string().min(1, "formErrors.message.required"),
  attachments: z
    .array(z.custom<File>())
    .refine((files) => files.every((file) => file instanceof File), {
      message: "formErrors.file.format",
    })
    .refine((files) => files.length <= 3, {
      message: "formErrors.file.maxAmmount",
    })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: "formErrors.file.maxSize",
    })
    .refine(
      (files) =>
        files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
      { message: "formErrors.file.format" }
    )
    .optional(),
});

export type TsendData = z.infer<typeof sendData>;

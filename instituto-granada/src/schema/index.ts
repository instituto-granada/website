import { z } from "zod";

export const formSchema = z.object({
  email: z.email("E-mail inválido"),
  message: z.string().min(5, "Mensagem deve ter no mínimo 5 caracteres"),
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Nome não pode conter números"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 11, {
      message: "Telefone inválido. Use o formato (11) 91234-5678",
    }),
  position: z.string().min(1, "Selecione um item"),
});

export type FormData = z.infer<typeof formSchema>;

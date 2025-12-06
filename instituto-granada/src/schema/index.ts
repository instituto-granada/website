import { z } from "zod";

export const formSchema = z.object({
  email: z.email("E-mail inválido"),
  message: z.string().min(5, "Mensagem deve ter no mínimo 5 caracteres"),
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Nome não pode conter números"),
  position: z.string().min(1, "Selecione um item"),
});

export type FormData = z.infer<typeof formSchema>;

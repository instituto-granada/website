import { z } from "zod";

export const formSchema = z.object({
  email: z.email("E-mail inválido"),
  message: z.string().min(5, "Mensagem deve ter no mínimo 5 caracteres"),
});

export type FormData = z.infer<typeof formSchema>;

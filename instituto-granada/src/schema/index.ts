import { z } from "zod";

export const formSchema = z.object({
  email: z.email("E-mail inválido"),
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  message: z.string().min(5, "Mensagem deve ter no mínimo 5 caracteres"),
});

export type FormData = z.infer<typeof formSchema>;

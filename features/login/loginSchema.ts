import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Niepoprawny format adresu email" })
    .min(1, { message: "Email jest wymagany" }),
  password: z
    .string()
    .min(8, { message: "Hasło musi zawierać co najmniej 8 znaków" }),
});
export default loginSchema;

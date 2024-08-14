import { z } from "zod";

const registerSchema = z
  .object({
    terms: z.boolean().refine((value) => value === true, {
      message: "Musisz zaakceptować regulamin",
    }),
    firstName: z.string().min(1, { message: "Imię jest wymagane" }),
    lastName: z.string().min(1, { message: "Nazwisko jest wymagane" }),
    email: z
      .string()
      .email({ message: "Niepoprawny format adresu email" })
      .min(1, { message: "Email jest wymagany" }),
    password: z
      .string()
      .min(8, { message: "Coś poszło nie tak" })
      .refine(
        (val) => {
          const regex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\@\$\!\%\*\?\&])/;
          return regex.test(val);
        },
        {
          message: "Coś poszło nie tak",
        }
      ),
    nick: z.string().min(1, { message: "Pseudonim jest wymagany" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Potwierdzenie hasła jest wymagane" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"],
  });
export default registerSchema;

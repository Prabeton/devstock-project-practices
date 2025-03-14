"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "./loginSchema";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { signIn } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import { useSnackbar } from "notistack";

import { InputForm } from "@/reusecomponents/";
import { CheckboxWithLabel } from "@/reusecomponents/";
import { Button } from "@/reusecomponents/";
import { GitHubIcon } from "@/icon/";

const Login = () => {
  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar(); 
  const t = useTranslations("Login");
  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try { 
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        enqueueSnackbar(t("loginError"), { variant: "error" });
      } else {
        router.push("/dashboard");
        enqueueSnackbar(t("loginSuccess"), { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar(t("loginError"), { variant: "error" });
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signIn("github", {
        redirect: false,
        callbackUrl: "/dashboard"
      });
       
      if (result?.error) {
        enqueueSnackbar(t("githubLoginError"), { variant: "error" });
      } else {
        router.push("/dashboard");
        enqueueSnackbar(t("loginSuccess"), { variant: "success" });
      }
    } catch (error) {
      console.error("Unexpected error during GitHub login:", error);
      enqueueSnackbar(t("unexpectedError"), { variant: "error" });
    }
  };
  

  return (
    <div className="box-border relative flex items-center justify-center w-screen h-screen bg-center bg-cover bg-image-laptop">
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-dark-gray">
        <div className="relative flex flex-col items-center justify-center gap-8 rounded-lg w-112 h-141 bg-gray">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full p-4 space-y-1 justify-evenly text-black">
            <div className="w-full m-0 text-2xl h-11.25 font-extralight text-white">
              {t("login")}
            </div>
            <InputForm
              label={t("email")}
              id="email"
              type="email"
              placeholder={t("email")}
              register={register}
              errors={errors}
              errorMessage={t("emailMassage")}
              className="w-96"
            />
            <InputForm
              label={t("password")}
              id="password"
              type="password"
              placeholder={t("password")}
              register={register}
              errors={errors}
              errorMessage={t("passwordMassage")}
              className="w-96"
            />
            <CheckboxWithLabel
              id="remember-me"
              name="rememberMe"
              label={t("rememberMe")}
            />
            <div className="flex flex-col">
              <Button
                type="submit"
                variant="primary"
                className="flex items-center justify-center h-10 text-white w-96"
                onClick={handleSubmit(onSubmit)}>
                {t("login")}
              </Button>
              <Link
                className="text-sm font-normal underline text-blue"
                href="#"
                passHref>
                {t("forgotPassword")}
              </Link>
            </div>
            <Button
              type="button"
              className="flex items-center justify-center h-10 gap-4 text-white w-96"
              variant="black"
              onClick={handleGithubLogin}>
              {t("loginWithGithub")} <GitHubIcon />
            </Button>
            <div className="flex gap-1 text-sm font-normal text-white">
              <p>{t("dontAccount")}</p>
              <Link
                className="text-sm underline text-blue"
                href="/register"
                passHref>
                {t("register")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

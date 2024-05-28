"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";

import { InputForm } from "@/reusecomponents/";
import { CheckboxWithLabel } from "@/reusecomponents/";
import { Button } from "@/reusecomponents/";
import ConfirmRegistration from "./ConfirmRegistration";
import registerSchema from "./registerSchema";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-30"
      onClick={onClick}
    />
  );
};
const Register = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    nick: string;
    password: string;
    confirmPassword: string;
    email: string;
    terms: boolean;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    handleClickRegisterConfirm();
  };

  const handleClickRegisterConfirm = async () => {
    const isValidForm = await trigger();
    if (!isValidForm) {
    }
    openModal();
  };

  const t = useTranslations("Register");

  return (
    <div className="box-border relative flex items-center justify-center w-screen h-screen bg-center bg-cover bg-image-laptop">
      <div className="box-border absolute inset-0 flex items-center justify-center bg-dark-gray">
        <div className="relative box-border flex flex-col p-8 w-175 h-163.5 rounded-lg bg-gray">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx("flex flex-col gap-8 box-border", {
              "blur-md": isModalOpen,
            })}>
            <div className="w-full m-0 text-2xl text-white h-9 font-extralight">
              {t("registerMC")}
            </div>
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-8">
                <InputForm
                  label={t("nick")}
                  id="nick"
                  type="text"
                  placeholder={t("nick")}
                  register={register}
                  errorMessage={t("nickMassage")}
                  errors={errors}
                  className="w-75"
                />
                <InputForm
                  label={t("firstName")}
                  id="firstName"
                  type="text"
                  placeholder={t("firstName")}
                  register={register}
                  errorMessage={t("firstNameMassage")}
                  errors={errors}
                  className="w-75"
                />
              </div>
              <div className="flex gap-8">
                <InputForm
                  label={t("lastName")}
                  id="lastName"
                  type="text"
                  placeholder={t("lastName")}
                  register={register}
                  errorMessage={t("lastNameMassage")}
                  errors={errors}
                  className="w-75"
                />
                <InputForm
                  label={t("email")}
                  id="email"
                  type="email"
                  placeholder={t("email")}
                  register={register}
                  errorMessage={t("emailMassage")}
                  errors={errors}
                  className="w-75"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 ">
              <InputForm
                label={t("password")}
                id="password"
                type="password"
                placeholder={t("password")}
                register={register}
                errorMessage={t("passwordMassages")}
                errors={errors}
                className="w-159"
              />
              <InputForm
                label={t("confirmPassword")}
                id="confirmPassword"
                type="password"
                placeholder={t("confirmPassword")}
                register={register}
                errorMessage={t("confirmPasswordMassage")}
                errors={errors}
                className="w-159"
              />
              <CheckboxWithLabel
                id="terms"
                name="terms"
                label={t("accept")}
                linkText={t("termsAndConditions")}
                linkHref="###"
                register={register}
                errors={errors}
                errorMessage={t("terms")}
              />
              <Button
                type="submit"
                variant="primary"
                className="flex items-center justify-center h-10 text-white w-159">
                {t("registerMC")}
              </Button>
              <div className="text-sm text-white">
                {t("haveAccount")}
                <Link
                  className="text-sm underline text-blue"
                  href="/login"
                  passHref>
                  {t("login")}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <Backdrop onClick={closeModal} />}
      {isModalOpen && (
        <div onClick={closeModal}>
          <ConfirmRegistration />
        </div>
      )}
    </div>
  );
};
export default Register;

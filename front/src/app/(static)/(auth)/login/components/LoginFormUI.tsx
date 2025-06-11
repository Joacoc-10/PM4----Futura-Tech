"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Routes } from "@/routes";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormDataLogin {
  email: string;
  password: string;
}

const LoginFormUI = () => {
  // const router = useRouter();

  const [formData, setFormData] = useState<FormDataLogin>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormDataLogin>({
    email: "",
    password: "",
  });
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
    if (hasBeenSubmitted) {
      validate();
    }
  };

  const validate = () => {
    const emailPattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    const errors: FormDataLogin = { email: "", password: "" };

    if (!emailPattern.test(formData.email)) {
      errors.email = "Ingrese un correo electrónico valido.";
    }
    if (formData.password.length < 8) {
      errors.password = "La contraseña debe de tener al menos 8 caracteres.";
    }

    setFormErrors(errors);

    return !errors.email && !errors.password;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasBeenSubmitted(true);
    validate();
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            name="email"
            id="email"
            label="Correo electronico"
            autoComplete="email"
            value={formData.email}
            onChange={onChange}
            required
            classNameContainer="mb-8 w-full"
            inputClassName="bg-light_blue-300 py-2 px-4"
            labelClassName="text-lg font-extrabold text-secondary_yellow-500"
          />
          {formErrors.email && (
            <p className="mb-2 text-sm text-red-500">{formErrors.email}</p>
          )}
          <Input
            id="paswword"
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            classNameContainer="mb-8 w-full"
            inputClassName="bg-light_blue-300 py-2 px-4"
            labelClassName="text-lg font-extrabold text-secondary_yellow-500"
          />
          {/* <div className="flex flex-col items-center justify-center"> */}
          <div>
            <Button
              type="submit"
              className="w-full mt-auto text-lg font-extrabold hover:bg-accent_blue-600"
              label="Iniciar sesion"
            ></Button>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              href={Routes.register}
              className="text-primary_blue-400 hover:text-secondary_yellow-500"
            >
              ¿Aún no te has registrado? Registrate!
            </Link>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default LoginFormUI;

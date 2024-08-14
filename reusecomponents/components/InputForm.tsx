import React from 'react';
import clsx from "clsx";
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type InputFormProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errorMessage?: string;
  errors: FieldErrors;
  className?: string;
  autoComplete?: string;
  required?: boolean;
};

const InputForm: React.FC<InputFormProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
  className,
  errorMessage,
  autoComplete, 
  required, 
}) => {
  return (
    <div className="relative flex flex-col space-y-0.25 box-border">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative">
        <input
          {...register(id)}
          type={type}
          placeholder={placeholder}
          id={id}
          autoComplete={autoComplete} 
          required={required} 
          className={clsx(
            "px-4 py-3 box-border font-normal text-light-gray bg-gray-700 border rounded-md h-10.25 text-sm",
            { "border-dry-concrete": !errors[id] },
            { "border-red-600": errors[id] },
            className
          )}
        />
        {errors[id] && (
          <p className="absolute text-xs text-red-600 font-extralight">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputForm;
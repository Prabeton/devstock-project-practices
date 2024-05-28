import clsx from "clsx";
import Link from "next/link";

type CheckboxWithLabelProps = {
  id: string;
  name: string;
  label: string;
  linkText?: string;
  linkHref?: string;
  register?: any;
  className?: string;
  errors?: { [key: string]: any };
  errorMessage?: string;
};

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  id,
  name,
  label,
  linkText,
  linkHref,
  register,
  className,
  errors,
  errorMessage,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-start gap-4 m-0 text-sm">
        <input
          {...(typeof register === "function" ? register(name) : {})}
          id={id}
          type="checkbox"
          className={clsx(
            "w-4 h-4 font-normal text-blue-600 bg-gray-600 border rounded border-dry-concrete focus:ring-0 checked:bg-blue-600 focus:outline-none",
            className
          )}
        />
        <div className="flex gap-1 text-white">
          {label}
          {linkText && linkHref && (
            <Link href={linkHref} passHref className="underline text-blue">
              {linkText}
            </Link>
          )}
        </div>
      </div>
      {errors && errors[id] && (
        <p className="absolute text-xs text-red-600 font-extralight">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
export default CheckboxWithLabel;

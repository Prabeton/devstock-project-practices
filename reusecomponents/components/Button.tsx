import clsx from "clsx";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "tertiary" | "black";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  onClick,
  variant = "primary",
  children,
}) => {
  const style = variant === "black" ? { backgroundColor: "#121415" } : {};

  return (
    <button
      type={type}
      className={clsx(
        "m-0 text-base font-normal rounded-lg cursor-pointer",
        { "bg-blue-600": variant === "primary" },
        { "bg-red-500": variant === "secondary" },
        { "bg-transparent": variant === "tertiary" },
        className
      )}
      style={style}
      onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

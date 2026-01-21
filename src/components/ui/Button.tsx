import { type ButtonHTMLAttributes, type ReactNode, memo } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      className={`${width} ${className} text-white rounded-lg px-2 py-1.5 capitalize cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default memo(Button);

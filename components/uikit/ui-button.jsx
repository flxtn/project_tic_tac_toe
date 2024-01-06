import clsx from "clsx";

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "rounded text-sm leading-tight px-6 py-2",
      lg: "rounded-lg text-2xl leading-tight px-5 py-2",
    }[size],
    {
      primary: "bg-teal-600 border text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant]
  );
  return <button className={buttonClassName}>{children}</button>;
}

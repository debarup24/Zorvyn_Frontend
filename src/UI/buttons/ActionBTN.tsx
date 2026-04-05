type ActionBTNProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size: "xs" | "sm" | "md" | "lg";
  variant?:
    | "brand"
    | "primary"
    | "secondary"
    | "outline"
    | "banner"
    | "neutral";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

// type in type --> index.ts

export default function ActionBTN({
  children,
  onClick,
  size = "md",
  variant = "brand",
  className = "",
  type = "button",
  disabled = false,
}: ActionBTNProps) {
  const sizeStyles = {
    xs: "w-full px-1 md:px-3 py-1 text-xs xl:text-xs",
    sm: "w-full px-2 md:px-5 py-2 text-xs xl:text-sm",
    md: "w-full xl:w-90 px-3 md:px-6 py-2 text-xs xl:text-sm",
    lg: "w-full xl:w-100 px-4 md:px-8 py-2 text-xs xl:text-sm",
  };

  const variantStyles = {
    brand:
      "w-full py-2.5 rounded-2xl bg-linear-to-r from-indigo-500 to-indigo-800 text-white font-medium cursor-pointer",
    primary: "bg-white text-slate800 hover:bg-slate-50",
    secondary:
      "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50",
    outline: "bg-transparent border border-slate-100 text-white",
    banner: "bg-linear-to-r from-indigo-500 to-indigo-800 text-white",
    neutral: "bg-slate-950 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
         rounded-md font-semibold cursor-pointer transition-all duration-200
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// How to use ?

{
  /* <ActionBTN 
  size="lg" 
  variant="brand">
  Book An Appointment
</ActionBTN>; */
}

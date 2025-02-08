import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" ;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 text-primary-10 font-playfair font-bold rounded-full bg-secondary-10 hover:bg-secondary-10/80 transition border-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

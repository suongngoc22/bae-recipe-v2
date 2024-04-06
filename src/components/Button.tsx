import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    icon: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const Button = ({ icon, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {icon}
        </button>
    )
}

export default Button
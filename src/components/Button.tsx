import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default Button
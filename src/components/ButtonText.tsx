import { MouseEventHandler, ReactNode } from "react";

interface ButtonTextProps {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style: 'small' | 'large';
    type: 'primary' | 'secondary' | 'text';
    icon?: ReactNode;
    className?: string;
    isDisabled?: boolean;
}

const ButtonText = ({ text, onClick, style, type, icon, className, isDisabled }: ButtonTextProps) => {

    let btnStyles;
    switch (style) {
        case 'large':
            if (type === 'primary') {
                btnStyles = 'min-w-[161px] bg-primary text-white text-base font-semibold px-9 py-4';
            } else if (type === 'secondary') {
                btnStyles = 'min-w-[161px] border border-primary text-base font-semibold text-primary px-9 py-4';
            } else {
                btnStyles = 'min-w-[161px] bg-transparent text-primary text-base font-semibold px-9 py-4';
            }

            break;
        case 'small':
            if (type === 'primary') {
                btnStyles = 'w-full min-w-[117px] bg-primary text-white text-sm font-medium px-4 py-2';
            } else if (type === 'secondary') {
                btnStyles = 'w-full min-w-[117px] border border-primary text-primary text-sm font-medium px-4 py-2';
            } else {
                btnStyles = 'w-full min-w-[117px] bg-transparent text-primary text-sm font-medium px-4 py-2';
            }

            break;

        default:
            break;
    }

    return (
        <button
            onClick={onClick}
            className={`flex justify-center items-center gap-3 rounded-xl ${btnStyles} ${className}`}
            disabled={isDisabled}
        >
            {text}
            {icon}
        </button>
    )
}

export default ButtonText
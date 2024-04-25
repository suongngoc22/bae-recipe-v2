import { MouseEventHandler } from "react";

interface ButtonTextProps {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type: 'primary' | 'secondary';
}

const ButtonText = ({ text, onClick, type }: ButtonTextProps) => {

    let styles;
    switch (type) {
        case 'primary':
            styles = 'bg-primary text-white';
            break;
        case 'secondary':
            styles = 'bg-transparent text-primary';
            break;

        default:
            break;
    }

    return (
        <button onClick={onClick} className={`w-[161px] px-4 py-2 rounded-xl text-base font-medium ${styles}`}>
            {text}
        </button>
    )
}

export default ButtonText
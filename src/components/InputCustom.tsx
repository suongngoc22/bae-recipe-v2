
interface InputCustomProps {
    type: string;
    label: string;
}

const InputCustom = ({ type, label }: InputCustomProps) => {
    return (
        <div className="relative">
            <span className="absolute text-[#A9A9A9] left-4 top-2 text-xs font-semibold">{label} </span>
            <input type={type} name={type} id={type} className="w-full bg-[#F1F1F1] pl-4 pr-4 pt-6 pb-2 outline-none rounded-md font-semibold" />
        </div>
    )
}

export default InputCustom
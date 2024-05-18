import { ChangeEvent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
interface InputCustomProps {
    type: 'email' | 'password' | 'number' | 'text';
    label: string;
    value: any;
    setValue: (value: any) => void;
    error: string;
}

const InputCustom = ({ type, label, value, setValue, error }: InputCustomProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    return (
        <div>
            <div className="relative">
                <span className="absolute text-[#A9A9A9] left-4 top-2 text-xs font-semibold">{label} </span>
                <input
                    type={showPassword ? 'text' : type}
                    name={type}
                    id={type}
                    value={value}
                    onChange={(e) => { handleChange(e) }}
                    className="w-full bg-[#F1F1F1] pl-4 pr-4 pt-6 pb-2 outline-none rounded-md font-semibold"
                />
                {
                    type === 'password' ?
                        <div
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                        </div>
                        : <></>
                }
            </div>
            <div className="w-full text-xs my-1">
                {error.length > 0
                    && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    )
}

export default InputCustom
import { IoClose } from "react-icons/io5";
import Loader from "../../components/Loader";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import InputCustom from "../../components/InputCustom";
import ButtonText from "../../components/ButtonText";
import { useState } from "react";

const Register = () => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChangeRegisterData = (key: string, value: any) => {
        setRegisterData({
            ...registerData,
            [key]: value
        })
    }

    const handleSignUp = () => {
        console.log(registerData);

    }

    return (
        <>
            <Loader loading={isLoading} />
            <div className="min-h-screen flex items-end">
                <div className="w-full px-8 flex flex-col gap-12 my-12">
                    <IoClose
                        size={24}
                        className="absolute top-10 cursor-pointer"
                        onClick={() => navigate('/home')}
                    />
                    <h1 className="text-[30px] leading-snug font-semibold max-w-[247px] text-primary">Create an Account!</h1>

                    <div className="flex flex-col gap-4">
                        <InputCustom
                            type="text"
                            label='Full Name'
                            value={registerData.displayName}
                            setValue={(value) => onChangeRegisterData("displayName", value)}
                        />
                        <InputCustom
                            type="email"
                            label='Email'
                            value={registerData.email}
                            setValue={(value) => onChangeRegisterData("email", value)}
                        />
                        <InputCustom
                            type="password"
                            label='Password'
                            value={registerData.password}
                            setValue={(value) => onChangeRegisterData("password", value)}
                        />
                        <InputCustom
                            type="password"
                            label='Confirm Password'
                            value={registerData.confirmPassword}
                            setValue={(value) => onChangeRegisterData("confirmPassword", value)}
                        />
                    </div>

                    <div className="flex flex-col justify-center text-sm text-center text-[#A9A9A9] max-w-[350px]">
                        <span className="">
                            By continuing you agree to our &nbsp;
                        </span>
                        <span>
                            <Link to={'Terms_and_Conditions'} className="text-[#181818]  font-semibold underline">Terms Conditions</Link>
                            &nbsp;and&nbsp;
                            <Link to={'Privacy_Policy'} className="text-[#181818] font-semibold underline">Privacy Policy </Link>
                        </span>

                    </div>

                    <div className="flex flex-col gap-10 text-center">
                        <ButtonText
                            text="Sign Up"
                            type="secondary"
                            style="large"
                            onClick={() => handleSignUp()}
                        />
                        <span className="text-sm text-[#A9A9A9]">Already have an account? <Link to={'/login'} className="font-semibold text-primary">Sign In</Link></span>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Register
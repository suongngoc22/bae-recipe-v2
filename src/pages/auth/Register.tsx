import { IoClose } from "react-icons/io5";
import Loader from "../../components/Loader";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import InputCustom from "../../components/InputCustom";
import ButtonText from "../../components/ButtonText";
import { useEffect, useState } from "react";

const Register = () => {
    const { isLoading, signUp } = useAuth();
    const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        email: '',
        password: ''
    });
    const [errorData, setErrorData] = useState({
        email: '',
        password: ''
    })

    const onChangeRegisterData = (key: string, value: any) => {
        setRegisterData({
            ...registerData,
            [key]: value
        });
        checkValidate(key, value);
    }

    const checkValidate = (key: string, value: any) => {
        const inputValue = value;

        if (key === 'email') {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
            handleErrorData("email", isValidEmail ? "" : "Invalid email address");
        }

        if (key === 'password') {
            const isValidPassword = inputValue.length >= 8;
            handleErrorData("password", isValidPassword ? "" : "Password must be at least 8 characters long");
        }
    }

    const handleErrorData = (key: string, value: any) => {
        setErrorData({
            ...errorData,
            [key]: value
        });
    }

    const handleSignUp = () => {
        console.log("giá trị đầy đủ, ko lỗi, ok có thể đăng ký");
        signUp(registerData);
    }

    useEffect(() => {
        if (registerData.email && registerData.password) {
            if (!errorData.email && !errorData.password) {
                setIsSignUpDisabled(false);
            } else {
                setIsSignUpDisabled(true);
            }

        } else {
            setIsSignUpDisabled(true);
        }
    }, [registerData, errorData]);

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

                    <div className="flex flex-col gap-3">
                        <div>
                            <InputCustom
                                type="email"
                                label='Email Address'
                                value={registerData.email}
                                setValue={(value) => onChangeRegisterData("email", value)}
                                error={errorData.email}
                            />
                        </div>
                        <div>
                            <InputCustom
                                type="password"
                                label='Password'
                                value={registerData.password}
                                setValue={(value) => onChangeRegisterData("password", value)}
                                error={errorData.password}
                            />
                        </div>
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
                            type={isSignUpDisabled ? "secondary" : "primary"}
                            style="large"
                            onClick={() => handleSignUp()}
                            isDisabled={isSignUpDisabled}
                        />
                        <span className="text-sm text-[#A9A9A9]">Already have an account? <Link to={'/login'} className="font-semibold text-primary">Sign In</Link></span>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Register
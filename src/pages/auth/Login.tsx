import { useEffect, useState } from "react"
import ButtonText from "../../components/ButtonText"
import InputCustom from "../../components/InputCustom"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import Loader from "../../components/Loader"
import { IoClose } from "react-icons/io5"
import GoogleIcon from '../../assets/Logo-Google.svg'

const Login = () => {
    const { user, isLoading, signIn, signInWithGoogle, error, setError } = useAuth();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    console.log(user);

    const onChangeLoginData = (key: string, value: any) => {
        setError(null);
        setLoginData({
            ...loginData,
            [key]: value
        })
    }

    const handleSignIn = () => {
        console.log(loginData);
        signIn(loginData);
    }

    const onGoogleSignIn = () => {
        try {
            signInWithGoogle();

        } catch (error) {
            console.log("Something went wrong");
        }
    }

    useEffect(() => {
        console.log(user);

        if (user) {
            navigate("/profile");
        }
    }, [navigate, user]);

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
                    <h1 className="text-[30px] leading-snug font-semibold max-w-[247px] text-primary">Sign In</h1>

                    <div className="flex flex-col gap-3">
                        <InputCustom
                            type="email"
                            label='Email'
                            value={loginData.email}
                            setValue={(value) => onChangeLoginData("email", value)}
                        />
                        <InputCustom
                            type="password"
                            label='Password'
                            value={loginData.password}
                            setValue={(value) => onChangeLoginData("password", value)}
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

                    <div className="flex flex-col gap-3 text-center">
                        <ButtonText
                            text="Sign In"
                            type="primary"
                            style="large"
                            onClick={() => handleSignIn()}
                        />
                        <span className="text-xs text-[#A9A9A9]">or</span>
                        <ButtonText
                            text="Continue with Google"
                            type="secondary"
                            style="large"
                            onClick={() => onGoogleSignIn()}
                            icon={<img src={GoogleIcon} className="w-5 h-5" />}
                        />

                        <span className="text-sm text-[#A9A9A9]">Don’t have an account? <Link to={'/register'} className="font-semibold text-primary">Sign up</Link></span>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Login
import ButtonText from "../../components/ButtonText"
import InputCustom from "../../components/InputCustom"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className='w-full h-screen px-8 flex flex-col translate-y-1/3 gap-12'>
            <h1 className="text-[30px] leading-snug font-semibold max-w-[247px] text-primary">Sign In</h1>

            <div className="flex flex-col gap-4">
                <InputCustom type="email" label='Email' />
                <InputCustom type="password" label='Password' />
                <Link to={'password-recovery'} className="text-sm font-semibold text-primary">Forget your password?</Link>
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
                <ButtonText text="Sign In" type="primary" style=
                    "large" />
                <span className="text-xs text-[#A9A9A9]">or</span>
                <ButtonText text="Continue with Google" type="secondary" style="large" />

                <span className="text-sm text-[#A9A9A9]">Don’t have an account? <Link to={'register'} className="font-semibold text-primary">Sign Up</Link></span>
            </div>
        </div>
    )
}

export default Login
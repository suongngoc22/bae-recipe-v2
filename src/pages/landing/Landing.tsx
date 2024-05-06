import ButtonText from "../../components/ButtonText"
import ArrowRightIcon from "../../assets/Arrow-Right.svg"
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen bg-onboarding bg-cover flex justify-center items-end pb-32 before:absolute before:bottom-0 before:w-full before:h-1/2 before:bg-gradient-to-t before:from-black before:to-[#0000]">
            <div className="flex flex-col gap-8 items-center text-white text-center z-10">
                <h1 className="text-[56px] leading-snug font-semibold max-w-[247px]">Let’s
                    Cooking</h1>
                <p className="text-[18px] font-normal leading-normal">Find best recipes for cooking</p>
                <ButtonText
                    text="Start cooking"
                    style="large"
                    type={"primary"}
                    icon={<img src={ArrowRightIcon} className="whiteSvg" />}
                    onClick={() => navigate('/home')}
                />
            </div >
        </div >
    )
}

export default Landing
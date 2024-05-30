import { FiX } from "react-icons/fi";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { unauthorizedActions } from "../redux/reducers/unauthorizedReducer";
import Login from "../pages/auth/Login";
import ProfileImage from '../assets/Profile.svg';
import { useNavigate } from "react-router-dom";
import ButtonText from "./ButtonText";
import BottomNavigate from "./BottomNavigate";

const Unauthorized = () => {
    const [isOpen, setIsOpen] = useState(false);
    const unauthorized = useAppSelector(state => state.unauthorized.showUnauthorized);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (unauthorized) {
            setIsOpen(true);
        }
    }, [unauthorized]);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => dispatch(unauthorizedActions.setShowUnauthorized(false)), 150);
    };

    return (
        <div className="z-1">
            <div className="flex flex-col gap-6 justify-center items-center w-full max-w-[300px] h-screen mx-auto">
                <img src={ProfileImage} width={100} height={100} />
                <span className="smallText">Log into existing account</span>
                <ButtonText
                    text="Login"
                    type={"primary"}
                    style="large"
                    onClick={() => navigate("/login")}
                    className="w-full"
                />
            </div>
            <BottomNavigate />
            {unauthorized &&
                <div className={`fixed top-10 left-0 w-full h-full z-[999] flex justify-center items-center bg-white backdrop-blur rounded-2xl ${isOpen ? 'animate-slide-up' : 'animate-slide-down'}`}>
                    <Button
                        children={<FiX size={20} color="white" />}
                        onClick={handleClose}
                        className="absolute top-6 right-4 w-8 h-8 bg-primary flex items-center justify-center rounded-full shadow-xl"
                    />
                    <Login />
                </div>}
        </div>
    )
}

export default Unauthorized
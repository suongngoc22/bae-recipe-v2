import { ReactNode, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
interface AuthProtectProps {
    children: ReactNode;
}

const AuthProtect = ({ children }: AuthProtectProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    return (
        user ? children : <></>
    )
}

export default AuthProtect
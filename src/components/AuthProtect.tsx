import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import Unauthorized from "./Unauthorized";
interface AuthProtectProps {
    children: ReactNode;
}

const AuthProtect = ({ children }: AuthProtectProps) => {
    const { user } = useAuth();

    return (
        user ? children : <Unauthorized />
    )
}

export default AuthProtect
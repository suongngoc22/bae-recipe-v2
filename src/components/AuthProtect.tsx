import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import Unauthorize from "./Unauthorize";

interface AuthProtectProps {
    children: ReactNode;
}

const AuthProtect = ({ children }: AuthProtectProps) => {
    const { user } = useAuth();

    return (
        user ? children : <Unauthorize />
    )
}

export default AuthProtect
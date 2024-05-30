import { ReactNode, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import Unauthorized from "./Unauthorized";
import { unauthorizedActions } from "../redux/reducers/unauthorizedReducer";
import { useAppDispatch } from "../redux/hooks";
interface AuthProtectProps {
    children: ReactNode;
}

const AuthProtect = ({ children }: AuthProtectProps) => {
    const { user } = useAuth();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(unauthorizedActions.setShowUnauthorized(true));
    }, []);

    return (
        user ? children : <Unauthorized />
    )
}

export default AuthProtect
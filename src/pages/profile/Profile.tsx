import { useNavigate } from "react-router-dom";
import BottomNavigate from "../../components/BottomNavigate";
import ButtonText from "../../components/ButtonText"
import { useAuth } from "../../hooks/useAuth"

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    }

    return (
        <>
            <div>
                Hello {user?.email} you logged in
                <ButtonText
                    text="Log out"
                    type="secondary"
                    style="large"
                    onClick={() => signOut(navigateToLogin)}
                />
            </div>

            <BottomNavigate />
        </>
    )
}

export default Profile
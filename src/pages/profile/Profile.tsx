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
        <div>
            <div className='p-6 flex flex-col gap-4'>
                <h1 className='heading'>My profile</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[100px] h-[100px] bg-slate-400 rounded-full overflow-hidden">
                            <img
                                src={"https://www.svgrepo.com/show/213882/avatar-user.svg"}
                            />
                        </div>
                        <ButtonText
                            text="Edit profile"
                            style="small"
                            type="secondary"

                        />
                    </div>
                    <span className="text-neutral90 text-xl font-semibold">
                        Alessandra Blair
                    </span>

                    <p className="text-neutral40 text-base">
                        Hello world I’m Alessandra Blair, I’m from Italy I love cooking so much!
                    </p>
                </div>
                <ButtonText
                    text="Log out"
                    type="secondary"
                    style="large"
                    onClick={() => signOut(navigateToLogin)}
                />
            </div>
            <BottomNavigate />
        </div>
    )
}

export default Profile
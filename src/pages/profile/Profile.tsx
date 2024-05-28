import { useNavigate } from "react-router-dom";
import BottomNavigate from "../../components/BottomNavigate";
import ButtonText from "../../components/ButtonText"
import { useAuth } from "../../hooks/useAuth"
import Info from "./components/Info";
import FavMealList from "../../components/FavMealList";
import { FavMealTabs } from "../favorite/components/FavMealTabs";
import Avatar from '/avatar-user.png';

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    console.log(user);

    const navigateToLogin = () => {
        navigate("/login");
    }

    const handleUserAvatar = (user?.photoURL !== undefined && user?.photoURL !== null)
        ? user?.photoURL
        : Avatar;

    return (
        <div>
            <div className="mainContent">
                <div className="flex flex-col gap-4">
                    <h1 className='heading'>My profile</h1>
                    <div className='flex flex-col gap-4'>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex justify-between items-center">
                                <div className="w-[80px] h-[80px]  rounded-full overflow-hidden">
                                    <img
                                        src={handleUserAvatar}
                                    />
                                </div>
                                <ButtonText
                                    text="Edit profile"
                                    style="small"
                                    type="secondary"
                                />
                            </div>
                            <span className="h5Text text-neutral90 font-semibold">
                                {user?.email}
                            </span>
                            <p className="text-neutral40 text-sm max-w-[256px] py-0.5">
                                Hello world I’m Alessandra Blair, I’m from Italy I love cooking so much!
                            </p>
                        </div>
                        <Info />
                        <div className="border-t border-neutral20 -mx-6"></div>
                        <FavMealTabs />
                    </div>
                    <FavMealList />
                </div>
                <ButtonText
                    text="Log out"
                    type="secondary"
                    style="small"
                    onClick={() => signOut(navigateToLogin)}
                />
            </div>
            <BottomNavigate />
        </div>
    )
}

export default Profile

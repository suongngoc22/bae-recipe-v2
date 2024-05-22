import { useNavigate } from "react-router-dom";
import BottomNavigate from "../../components/BottomNavigate";
import ButtonText from "../../components/ButtonText"
import { useAuth } from "../../hooks/useAuth"
import Info from "./components/Info";
import { useState } from "react";
import FavMealList from "../../components/FavMealList";

const Profile = () => {
    const { user, signOut } = useAuth();
    const [isActive, setIsActive] = useState('recipe');
    const navigate = useNavigate();

    console.log(user?.displayName);

    const navigateToLogin = () => {
        navigate("/login");
    }

    const handleActiveTab = (activeTab: string) => {
        setIsActive(activeTab);
    }

    const handleUserAvatar = (user?.photoURL !== undefined && user?.photoURL !== null)
        ? user?.photoURL
        : 'https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg';

    return (
        <div>
            <div className="p-6">
                <h1 className='heading mb-2'>My profile</h1>
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
                        <p className="text-neutral40 text-sm max-w-[256px]">
                            Hello world I’m Alessandra Blair, I’m from Italy I love cooking so much!
                        </p>
                    </div>
                    <Info />
                    <div className="border-t border-neutral20 -mx-6"></div>
                    <div className='flex justify-between items-center gap-4'>
                        <ButtonText
                            text='Video'
                            style="small"
                            type={isActive === 'video' ? 'primary' : 'text'}
                            className="flex-1"
                            onClick={() => handleActiveTab('video')}
                        />
                        <ButtonText
                            text='Recipe'
                            style="small"
                            type={isActive === 'recipe' ? 'primary' : 'text'}
                            className="flex-1"
                            onClick={() => handleActiveTab('recipe')}
                        />
                    </div>
                </div>
            </div>
            <ButtonText
                text="Log out"
                type="secondary"
                style="small"
                onClick={() => signOut(navigateToLogin)}
            />
            <FavMealList />
            <BottomNavigate />
        </div>
    )
}

export default Profile

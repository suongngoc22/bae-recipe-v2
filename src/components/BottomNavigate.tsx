import { FiBookmark, FiHome, FiUser } from "react-icons/fi"
import { useLocation } from "react-router-dom"
import { bottomNavigatorHeight, layoutMaxWidth } from "../common/define"
import NavItem from "./NavItem"

const navItems = [
    {
        url: '/home',
        icon: <FiHome size={22} />
    },
    {
        url: '/profile/favorites',
        icon: <FiBookmark size={22} />
    },
    {
        url: '/profile',
        icon: <FiUser size={22} />
    },
]

const BottomNavigate = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className={`w-full flex justify-evenly items-center fixed -bottom-1 bg-white shadow-inner`} style={{ height: bottomNavigatorHeight, maxWidth: layoutMaxWidth }}>
            {navItems.map(navItem => (
                <NavItem {...navItem} isActive={location.pathname.startsWith(navItem.url)} />
            ))}
        </div>
    )
}

export default BottomNavigate
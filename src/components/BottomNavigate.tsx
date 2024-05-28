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
        url: '/favorites',
        icon: <FiBookmark size={22} />
    },
    {
        url: '/profile',
        icon: <FiUser size={22} />
    },
]

const BottomNavigate = () => {
    const location = useLocation();

    return (
        <div className={`fixed bottom-0 bg-white shadow-inner w-full`} style={{ maxWidth: layoutMaxWidth }}>
            <div className="flex justify-evenly items-center w-full" style={{ height: bottomNavigatorHeight }}>
                {navItems.map((navItem, index) => (
                    <NavItem
                        {...navItem}
                        key={index}
                        isActive={location.pathname.startsWith(navItem.url)}
                    />
                ))}
            </div>
        </div>
    )
}

export default BottomNavigate
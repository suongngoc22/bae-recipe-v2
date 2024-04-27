import { FiBookmark, FiHome, FiUser } from "react-icons/fi"
import Button from "./Button"
import { Link } from "react-router-dom"

const BottomNavigate = () => {
    return (
        <div className="w-[430px] flex justify-evenly items-center fixed bottom-0 translate-y-1 bg-white px-6 pt-5 pb-3 shadow-inner">
            <Link to='/home'>
                <Button children={<FiHome size={22} />} className="text-primary" />
            </Link>
            <Link to='/profile/favorites'>
                <Button children={<FiBookmark size={22} />} className="text-[#d0d0d0]" />
            </Link>
            <Link to='/profile'>
                <Button children={<FiUser size={22} />} className="text-[#d0d0d0]" />
            </Link>
        </div>
    )
}

export default BottomNavigate
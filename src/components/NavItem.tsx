import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

interface NavItemProps {
    url: string;
    icon: ReactNode;
    isActive: boolean;
}

const NavItem = ({ url, icon, isActive }: NavItemProps) => {
    return (
        <Link to={url} >
            <Button children={icon} className={isActive ? 'text-primary' : 'text-[#d0d0d0]'} />
        </Link>
    )
}

export default NavItem
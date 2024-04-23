import { Link } from 'react-router-dom'
import Logo from '/bae-recipe-logo.png'
import { FiSearch } from "react-icons/fi"

const Header = () => {
  return (
    <div className='flex justify-between px-8'>
      <div className='flex justify-center items-center gap-2'>
        <img
          src={Logo}
          alt='bae-logo'
          className='max-w-6 max-h-6'
        />
        <h1 className="text-lg font-pacifico">Bae Recipe</h1>
      </div>
      <Link to='/search'>
        <FiSearch
          size={22}
        />
      </Link>
    </div>
  )
}

export default Header
import { Link } from 'react-router-dom'
import Logo from '/bae-recipe-logo.png'
import { FiMenu, FiSearch } from "react-icons/fi"

const Header = () => {
  return (
    <header className="py-4 px-8 flex justify-between items-center bg-blue-200">
      <FiMenu size={20} />
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
          size={20}
        />
      </Link>
    </header>
  )
}

export default Header
import { Link } from 'react-router-dom'
import Logo from '/bae-recipe-logo.png'
import { FiSearch } from "react-icons/fi"

const Header = () => {
  return (
    <div className='flex justify-between px-8 pt-8 after:absolute after:-top-[50%] after:left-1/2 after:-translate-x-1/2 after:w-[600px] after:h-[600px] after:rounded-full after:bg-gradient-to-r from-[#ffcc81] to-primary after:opacity-80'>
      <div className='flex flex-col z-10 text-white w-full'>
        <div className='flex justify-between'>
          <div className='flex justify-center items-center gap-2 text-white'>
            <img
              src={Logo}
              alt='bae-logo'
              className='max-w-6 max-h-6'
            />
            <h1 className="text-lg font-pacifico">Bae Recipe</h1>
          </div>
          <Link to='/search' className=''>
            <FiSearch
              size={22}
            />
          </Link>
        </div>
        <h1 className="text-4xl font-balsamiq font-bold my-5">What to eat today ?</h1>
      </div>
    </div>
  )
}

export default Header
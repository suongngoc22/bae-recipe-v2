import BottomNavigate from '../../components/BottomNavigate'
import FavMealList from '../../components/FavMealList'
import { FavMealTabs } from './components/FavMealTabs'

const Favorite = () => {
    return (
        <div>
            <div className="mainContent">
                <div className='flex flex-col gap-4'>
                    <h1 className='heading'>Saved recipes</h1>
                    <FavMealTabs />
                    <div>
                        <FavMealList />
                    </div>
                </div>
            </div>
            <BottomNavigate />
        </div>
    )
}

export default Favorite
import BottomNavigate from '../../components/BottomNavigate'
import ButtonText from '../../components/ButtonText'
import FavMealList from '../../components/FavMealList'

const Favorite = () => {
    return (
        <div>
            <div className='p-6'>
                <h1 className='heading'>Saved recipes</h1>
                <div className='flex justify-between py-3'>
                    <ButtonText text='Video' style="small" type='primary' />
                    <ButtonText text='Recipe' style="small" type='secondary' />
                </div>
                <div>
                    <FavMealList />
                </div>
            </div>
            <BottomNavigate />
        </div>
    )
}

export default Favorite
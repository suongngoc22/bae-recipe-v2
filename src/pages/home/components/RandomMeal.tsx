import { useEffect } from 'react'
import Meal from '../../../components/Meal'
import { fetchRandomMeal } from '../../../redux/reducers/mealReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Button from '../../../components/Button'
import { FaShuffle } from 'react-icons/fa6'
import Skeleton from '../../../components/Skeleton'

const RandomMeal = () => {
    const dispatch = useAppDispatch();
    const randomMeal = useAppSelector(state => state.meal.randomMeal);
    const favMeals = useAppSelector(state => state.meal.favMeals);
    const isLoading = useAppSelector(state => state.meal.isLoading);

    useEffect(() => {
        dispatch(fetchRandomMeal());


    }, [dispatch]);

    return (
        isLoading ? <Skeleton
            active image={{ styles: 'w-full h-[426px] rounded-md' }}
        />
            :
            randomMeal &&
            <div className='relative'>
                <Button
                    icon={<FaShuffle size={18} color="white" />}
                    onClick={() => dispatch(fetchRandomMeal())}
                    className="absolute z-10 top-3 right-2 w-8 h-8 bg-primary flex items-center justify-center rounded-full shadow-xl"
                />
                <Meal
                    meal={randomMeal}
                    isRandom={!!randomMeal}
                    isFav={!!favMeals.find(fav => fav.idMeal === randomMeal.idMeal)}
                />
            </div>
    );
}

export default RandomMeal
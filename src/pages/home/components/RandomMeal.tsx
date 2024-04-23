import { useEffect } from 'react'
import Meal from '../../../components/Meal'
import { fetchRandomMeal } from '../../../redux/reducers/mealReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
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
            <Meal
                meal={randomMeal}
                isRandom={!!randomMeal}
                isFav={!!favMeals.find(fav => fav.idMeal === randomMeal.idMeal)}
            />
    );
}

export default RandomMeal
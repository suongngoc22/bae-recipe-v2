import { useEffect } from 'react'
import Meal from '../../../components/Meal'
import { fetchRandomMeal } from '../../../redux/reducers/mealReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Button from '../../../components/Button'
import { FaShuffle } from 'react-icons/fa6'

const RandomMeal = () => {
    const dispatch = useAppDispatch();
    const randomMeal = useAppSelector(state => state.meal.randomMeal);
    const favMeals = useAppSelector(state => state.meal.favMeals);

    useEffect(() => {
        dispatch(fetchRandomMeal());


    }, [dispatch]);

    return (
        <>
            {randomMeal &&
                <>
                    <Button icon={<FaShuffle />} />
                    <Meal
                        meal={randomMeal}
                        isRandom={!!randomMeal}
                        isFav={!!favMeals.find(fav => fav.idMeal === randomMeal.idMeal)}
                    />
                </>
            }
        </>
    );
}

export default RandomMeal
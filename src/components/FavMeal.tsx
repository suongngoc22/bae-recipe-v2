import { Link } from "react-router-dom"
import { IMeal } from "../types/define-type"
import { FiBookmark } from "react-icons/fi"
import Button from "./Button"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { mealActions } from "../redux/reducers/mealReducer"

interface FavMealProps {
    meal: IMeal;

}

const FavMeal = ({ meal }: FavMealProps) => {
    const favMeals = useAppSelector(state => state.meal.favMeals);
    const isFav = favMeals.find(favMeal => favMeal.idMeal === meal?.idMeal);
    const dispatch = useAppDispatch();

    const handleButtonFav = () => {
        if (!isFav && meal) {
            dispatch(mealActions.addFavMeal(meal));
        } else {
            meal && dispatch(mealActions.removeFavMeal(meal));
        }
    }

    return (
        <Link to={`/meal/${meal.idMeal}`} >
            <li className='relative min-w-20 flex flex-col 2 cursor-pointer shadow-lg rounded-md overflow-hidden'>
                <img
                    src={meal?.strMealThumb}
                    alt={meal?.strMeal}
                    loading="lazy"
                    className="w-full h-[180px] object-fill" />
                <div
                    className="py-3 px-5 inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px] text-base font-semibold leading-10 bg-white"
                >
                    {meal?.strMeal}
                </div>
                <Button
                    children={
                        <FiBookmark
                            size={26}
                            stroke="white"
                            style={{ fill: isFav ? `white` : '' }}
                        />}
                    onClick={() => handleButtonFav()}
                    className="absolute bottom-2 right-8 -translate-y-1/2 w-14 h-14 bg-primary flex items-center justify-center rounded-full                          
                        after:absolute
                        after:content-['']
                        after:w-full after:h-1/2
                        after:bottom-0 after:left-0
                        after:rounded-bl-full
                        after:rounded-br-full
                        after:bg-primary
                        after:shadow-btnShadow
                        after:shadow-primary
                        after:-z-10
                    "
                />
            </li>
        </Link>
    )
}

export default FavMeal
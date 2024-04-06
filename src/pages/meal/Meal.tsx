import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchMealDetail, mealActions } from "../../redux/reducers/mealReducer"
import Button from "../../components/Button"
import { FiBookmark, FiChevronLeft } from "react-icons/fi"
import SubTitle from "./components/SubTitle"

const MealDetail = () => {
    const { id } = useParams();
    const meal = useAppSelector(state => state.meal.mealDetail);
    const isLoading = useAppSelector(state => state.meal.isLoading);
    const favMeals = useAppSelector(state => state.meal.favMeals);
    const isFav = favMeals.find(favMeal => favMeal.idMeal === meal?.idMeal);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(fetchMealDetail(id));
        }
    }, [dispatch, id]);

    const getIngredients = (meal: any) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (meal['strIngredient' + i]) {
                if (meal['strMeasure' + i] !== '' && meal['strMeasure' + i].trim() !== '') {
                    ingredients.push(`${meal['strIngredient' + i]} - ${meal['strMeasure' + i]}`);
                } else {
                    ingredients.push(`${meal['strIngredient' + i]}`);
                }
            } else {
                break;
            }
        };
        return ingredients;
    }

    const handleButtonFav = () => {
        if (!isFav && meal) {
            dispatch(mealActions.addFavMeal(meal));
        } else {
            meal && dispatch(mealActions.removeFavMeal(meal));
        }
    }

    return (
        <>
            {isLoading ? <div>Loading</div> :
                meal ?
                    <div className="">
                        <div className="relative">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-full max-h-52 object-cover object-center z-10"
                            />
                            <Button
                                icon={<FiChevronLeft size={20} color="white" />}
                                onClick={() => navigate(-1)}
                                className="absolute top-6 left-4 w-8 h-8 bg-primary flex items-center justify-center rounded-full shadow-xl"
                            />
                            <Button
                                icon={
                                    <FiBookmark
                                        size={26}
                                        stroke="white"
                                        style={{ fill: isFav ? `white` : '' }}
                                    />}
                                onClick={() => handleButtonFav()}
                                className="absolute bottom-0 right-8 translate-y-1/2 w-14 h-14 bg-primary flex items-center justify-center rounded-full 
                                
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
                        </div>
                        <div className="px-8 py-5">
                            <h1 className="text-[25px] font-bold text-left pb-4 min-w-[300px] max-w-[280px]">
                                {meal.strMeal}
                            </h1>
                            <div className="flex flex-col gap-3">
                                <SubTitle name='Ingredients' />
                                {getIngredients(meal)?.length &&
                                    <ul>
                                        {getIngredients(meal).map((ingredient) => (
                                            <li className="text-lightgray">
                                                {ingredient}
                                            </li>
                                        ))}
                                    </ul>
                                }
                                <SubTitle name='Directions' />
                                <p className="whitespace-pre-wrap text-lightgray">{meal.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <span>Oops sth wrong</span>
                    </div>
            }
        </>
    )
}

export default MealDetail
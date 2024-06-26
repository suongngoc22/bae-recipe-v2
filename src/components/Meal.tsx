import { FiHeart } from "react-icons/fi";
import { IMeal } from "../types/define-type";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchRandomMeal, mealActions } from "../redux/reducers/mealReducer";
import { MouseEvent, useEffect } from "react";
import Button from "./Button";
import { FaShuffle } from "react-icons/fa6";
import { addFavMealDB, removeFavMealDB } from "../api/meal/meal.api";
import { useAuth } from "../hooks/useAuth";
import { unauthorizedActions } from "../redux/reducers/unauthorizedReducer";
import Unauthorized from "./Unauthorized";

interface MealProps {
    meal: IMeal;
    isFav?: boolean;
    isRandom?: boolean;
}

const Meal = ({ meal, isFav, isRandom }: MealProps) => {
    const dispatch = useAppDispatch();
    const { user } = useAuth();
    const unauthorized = useAppSelector(state => state.unauthorized.showUnauthorized);

    useEffect(() => {
        // reset unauthoized page to false
        dispatch(unauthorizedActions.setShowUnauthorized(false));
    }, [dispatch]);

    const handleButtonFav = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if (user) {
            if (!isFav && meal) {
                // call api
                addFavMealDB(meal, user?.uid);
                dispatch(mealActions.addFavMeal(meal));
            } else {
                removeFavMealDB(meal, user?.uid);
                dispatch(mealActions.removeFavMeal(meal));
            }
        } else {
            setTimeout(() => dispatch(unauthorizedActions.setShowUnauthorized(true)), 150);
        }
    }

    const handleButtonRandom = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(fetchRandomMeal());
    }

    return (
        <>
            <Link to={`/meal/${meal.idMeal}`} >
                <div className="meal shadow-xl rounded-lg cursor-pointer">
                    <div className="meal-header relative">
                        {
                            isRandom &&
                            <>
                                <div
                                    className="absolute h-10 w-30 top-3 -left-3 z-10 shadow-xl
                                        before:absolute before:bottom-0 before:left-1 before:border-[8px] before:border-[#dc6b07] before:rotate-45 before:-z-10 before:border-r-transparent before:border-t-transparent before:border-l-transparent">
                                    <div className="absolute bg-primary py-1 w-32 top-0 text-center text-white rounded-md rounded-bl-none">
                                        Random Recipe
                                    </div>
                                </div>
                                <Button
                                    children={<FaShuffle size={18} color="white" />}
                                    onClick={(e) => handleButtonRandom(e)}
                                    className="absolute z-10 top-3 right-2 w-8 h-8 bg-primary flex items-center justify-center rounded-full shadow-xl"
                                />
                            </>

                        }
                        <img
                            className="rounded-t-lg w-full h-[366px]"
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                        />
                    </div>
                    <div className="meal-body flex justify-between items-center p-4">
                        <span className="text-md font-medium">
                            {meal.strMeal || ''}
                        </span>
                        {
                            <button className="" onClick={(e) => {
                                handleButtonFav(e);
                            }}>
                                {!isFav ?
                                    <FiHeart size={20} color="#808080" fill="#808080" /> :
                                    <FiHeart size={20} color="#ff7f11" fill="#ff7f11" />
                                }
                            </button>
                        }
                    </div>
                </div>
            </Link>
            {unauthorized && <Unauthorized />}
        </>
    )
}

export default Meal
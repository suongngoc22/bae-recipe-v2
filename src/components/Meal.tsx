import { FiHeart } from "react-icons/fi";
import { IMeal } from "../types/define-type";
import { Link } from "react-router-dom";

interface MealProps {
    meal: IMeal;
    isFav?: boolean;
    onChangeFav?: (isFav: boolean) => void;
    isRandom?: boolean;
}

const Meal = ({ meal, isFav, onChangeFav, isRandom }: MealProps) => {

    return (
        <Link to={`/meal/${meal.idMeal}`}>
            <div className="meal shadow-xl rounded-lg cursor-pointer">
                <div className="meal-header relative">
                    {
                        isRandom && <div
                            className="
                            absolute
                            h-10
                            w-30
                            top-3
                            -left-3
                            z-10
                            
                            before:absolute
                            before:bottom-0
                            before:left-1
                            before:border-[8px]
                            before:border-[#dc6b07]
                            before:rotate-45
                            before:-z-10
                            before:border-r-transparent
                            before:border-t-transparent
                            before:border-l-transparent

                        ">
                            <div className="
                            absolute
                            bg-primary
                            py-1 
                            w-32
                            top-0
                            text-center
                            text-white
                            rounded-md
                            rounded-bl-none
                            
                        ">
                                Random Recipe
                            </div>
                        </div>
                    }

                    <img
                        className="rounded-t-lg"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>
                <div className="meal-body flex justify-between items-center p-4">
                    <span className="text-lg font-medium">
                        {meal.strMeal || ''}
                    </span>
                    {onChangeFav &&
                        <button className="bg-slate-100" onClick={() => { onChangeFav(!isFav) }}>
                            {!isFav ?
                                <FiHeart size={20} color="#808080" fill="#808080" /> :
                                <FiHeart size={20} color="#ff7f11" fill="#ff7f11" />
                            }
                        </button>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Meal
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMealDetail } from "../../redux/reducers/mealReducer";

const MealDetail = () => {
    const { id } = useParams();
    const meal = useAppSelector(state => state.meal.mealDetail);
    const isLoading = useAppSelector(state => state.meal.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchMealDetail(id));
        }
    }, [id]);

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

    return (
        <>
            <Header />
            {
                isLoading ? <div>Loading</div> :
                    meal ?
                        <div className="px-8 py-6">
                            <h1 className="text-lg font-medium text-center pb-4">
                                {meal.strMeal}
                            </h1>
                            <div className="flex flex-col gap-4">
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="rounded-xl"
                                />
                                <p className="whitespace-pre-wrap">{meal.strInstructions}</p>
                                {getIngredients(meal)?.length &&
                                    <ul>
                                        {getIngredients(meal).map((ingredient) => (
                                            <li>{ingredient}</li>
                                        ))}
                                    </ul>
                                }
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
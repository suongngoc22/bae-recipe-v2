import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IMeal } from "../../types/define-type";
import Header from "../../components/Header";

const MealDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState<IMeal | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMealById = async (idMeal: string) => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await res.json();
            const meal = data.meals[0];

            setMeal({
                ...meal,
                ingredients: getIngredients(meal)
            });
            setLoading(false);
        }
        if (id) {
            setLoading(true);
            getMealById(id);
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
                loading ? <div>Loading</div> :
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
                                {meal.ingredients?.length &&
                                    <ul>
                                        {meal.ingredients?.map((ingredient) => (
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
import { useEffect, useState } from 'react';
import { IMeal } from '../../../types/define-type';
import Meal from '../../../components/Meal';

const RandomMeal = () => {

    const [randomMeal, setRandomMeal] = useState<IMeal | undefined>();

    useEffect(() => {
        const getRandomMeal = async () => {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await res.json();
            const randomMeal = data.meals[0];

            setRandomMeal({
                idMeal: randomMeal.idMeal,
                strMeal: randomMeal.strMeal,
                strMealThumb: randomMeal.strMealThumb
            });
        };

        getRandomMeal();
    }, []);

    return (
        <>
            {randomMeal &&
                <Meal
                    meal={randomMeal}
                    isRandom={!!randomMeal}
                />
            }
        </>
    );
}

export default RandomMeal
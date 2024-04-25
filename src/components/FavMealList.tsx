import { useAppSelector } from "../redux/hooks"
import FavMeal from "./FavMeal"

const FavMealList = () => {
  const favMeals = useAppSelector(state => state.meal.favMeals);

  return (
    <ul className="flex flex-col gap-6 py-3">
      {
        favMeals.map((favMeal, index) => {
          return (
            <FavMeal key={index} meal={favMeal} />
          )
        })
      }
    </ul>
  )
}

export default FavMealList
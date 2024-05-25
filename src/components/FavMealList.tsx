import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import FavMeal from "./FavMeal";
import { useAuth } from "../hooks/useAuth";
import { fetchFavMeals } from "../redux/reducers/mealReducer";

const FavMealList = () => {
  const favMeals = useAppSelector(state => state.meal.favMeals);
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const getFavMeals = async () => {
      if (user) {
        dispatch(fetchFavMeals(user.uid));
      }
    }
    getFavMeals();
  }, [user]);

  return (
    <ul className="flex flex-col gap-6 py-2">
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
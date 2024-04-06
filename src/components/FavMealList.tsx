import React from 'react'
import { useAppSelector } from "../redux/hooks"
import FavMeal from "./FavMeal"

const FavMealList = () => {
  const favMeals = useAppSelector(state => state.meal.favMeals);

  return (
    <ul className="flex overflow-y-auto gap-3 my-4 pb-3">
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
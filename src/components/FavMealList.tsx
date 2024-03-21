import { IMeal } from "../types/define-type"
import FavMeal from "./FavMeal"

const favoriteMeals: IMeal[] = [
  {
    idMeal: '132',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },
  {
    idMeal: '1',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },
  {
    idMeal: '2',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },
  {
    idMeal: '3',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },
  {
    idMeal: '132',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },
  {
    idMeal: '1324',
    strMeal: 'Banh bao',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg'
  },

]


const FavMealList = () => {
  // gọi api trả về ds fav meal 

  return (
    <ul className="flex overflow-y-auto gap-3 my-4 pb-3">
      {
        favoriteMeals.map((favoriteMeal, index) => {
          return (
            <FavMeal key={index} meal={favoriteMeal} />
          )
        })
      }
    </ul>
  )
}

export default FavMealList
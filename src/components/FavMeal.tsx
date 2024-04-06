import React from 'react'
import { Link } from "react-router-dom"
import { IMeal } from "../types/define-type"

interface FavMealProps {
    meal: IMeal;

}

const FavMeal = ({ meal }: FavMealProps) => {

    return (
        <Link to={`/meal/${meal.idMeal}`} >
            <li className='min-w-20 w-20 flex flex-col justify-center items-center gap-2 cursor-pointer'>
                <img
                    src={meal?.strMealThumb}
                    alt={meal?.strMeal}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover shadow-md" />
                <span
                    className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-sm"
                >
                    {meal?.strMeal}
                </span>
            </li>
        </Link>
    )
}

export default FavMeal
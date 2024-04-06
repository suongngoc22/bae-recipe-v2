import React, { useEffect } from "react";
import FavMealList from "../../components/FavMealList"
import Header from "../../components/Header"
import RandomMeal from "./components/RandomMeal"
import { useAppDispatch } from "../../redux/hooks";
import { mealActions } from "../../redux/reducers/mealReducer";

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const favMeals = localStorage.getItem("favMeals");
        if (favMeals) {
            const favMealsFromLS = JSON.parse(favMeals);
            dispatch(mealActions.setFavMeals(favMealsFromLS));
        }

    }, []);

    return (
        <div>
            <Header />
            <div className="px-8">
                <FavMealList />
                <RandomMeal />
            </div>
        </div>
    )
}

export default Home
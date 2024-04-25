import { useEffect } from "react"
import Header from "../../components/Header"
import RandomMeal from "./components/RandomMeal"
import { useAppDispatch } from "../../redux/hooks"
import { mealActions } from "../../redux/reducers/mealReducer"
import BottomNavigate from "../../components/BottomNavigate"

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
        <div className="relative">
            <Header />
            <div className="px-8">
                <RandomMeal />
            </div>
            <BottomNavigate />
        </div>
    )
}

export default Home
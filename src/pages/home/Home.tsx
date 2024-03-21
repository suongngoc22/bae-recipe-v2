import FavMealList from "../../components/FavMealList"
import Header from "../../components/Header"
import RandomMeal from "./components/RandomMeal"

const Home = () => {
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
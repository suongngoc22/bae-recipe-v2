import Header from "../../components/Header"
import RandomMeal from "./components/RandomMeal"
import BottomNavigate from "../../components/BottomNavigate"

const Home = () => {
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
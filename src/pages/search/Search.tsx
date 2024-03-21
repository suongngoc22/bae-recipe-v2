import { ChangeEvent, useState } from "react"
import { FiChevronLeft, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { IMeal } from "../../types/define-type"
import Meal from "../../components/Meal"

const Search = () => {
    const [meals, setMeals] = useState<IMeal[]>([]);
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
    const navigate = useNavigate();

    const getMealBySearch = async (term: string) => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
        const data = await res.json();
        const meals = data.meals;

        return meals;
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timer);
        console.log('clear nè');


        const searchTerm = e.target.value.trim();

        if (searchTerm !== '') {
            const timeoutId = setTimeout(async () => {

                console.log(searchTerm);
                const mealsData = await getMealBySearch(searchTerm);
                if (mealsData && mealsData.length) {
                    if (mealsData.length > 0) {
                        setMeals(mealsData);
                    }
                }

            }, 500);
            setTimer(timeoutId);
        } else {
            setMeals([]);
        }
    }

    return (
        <div className="px-8 py-6">
            <div className="flex justify-between items-center pb-8">
                <button onClick={() => navigate(-1)} >
                    <FiChevronLeft size={24} />
                </button>
                <div className="w-64 flex justify-start items-center gap-2 py-2 pl-3 pr-5 rounded-lg bg-[#f6f6f6]">
                    <FiSearch size={16} />
                    <input
                        type="text"
                        placeholder="Pizza"
                        className="w-full bg-transparent outline-none border-none"
                        onChange={(e) => { handleSearch(e) }}
                    />
                </div>
                <span
                    className="text-primary font-medium cursor-pointer"
                >
                    Search
                </span>
            </div>
            <div className="flex flex-col gap-6">
                {
                    meals && meals.map((meal) => {
                        return <Meal meal={meal} />
                    })
                }
            </div>

        </div>
    )
}

export default Search
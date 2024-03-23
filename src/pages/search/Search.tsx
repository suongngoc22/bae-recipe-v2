import { ChangeEvent, useState } from "react"
import { FiChevronLeft, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import Meal from "../../components/Meal"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchMealBySearch } from "../../redux/reducers/mealReducer"

const Search = () => {
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
    const navigate = useNavigate();
    const searchMeals = useAppSelector(state => state.meal.searchMeals);
    const dispatch = useAppDispatch();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timer);
        console.log('clear nè');

        const searchTerm = e.target.value.trim();

        if (searchTerm !== '') {
            const timeoutId = setTimeout(async () => {
                dispatch(fetchMealBySearch(searchTerm));

            }, 500);
            setTimer(timeoutId);
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
                    searchMeals && searchMeals.map((meal) => {
                        return <Meal meal={meal} />
                    })
                }
            </div>

        </div>
    )
}

export default Search
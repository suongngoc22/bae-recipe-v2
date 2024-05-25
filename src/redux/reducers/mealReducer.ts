import { getFavMealsDB, getMealBySearch } from './../../api/meal/meal.api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMeal } from './../../types/define-type';
import { getMealById, getRandomMeal } from '../../api/meal/meal.api';

interface MealState {
    randomMeal: IMeal | null;
    favMeals: IMeal[];
    mealDetail: IMeal | null;
    isLoading: boolean;
    searchMeals: IMeal[] | null;
}

const initialState: MealState = {
    randomMeal: null,
    favMeals: [],
    mealDetail: null,
    isLoading: false,
    searchMeals: null
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        setRandomMeal: (state, action: PayloadAction<IMeal | null>) => {
            state.randomMeal = action.payload
        },
        addFavMeal: (state, action: PayloadAction<IMeal>) => {
            const newFavMeals = [...state.favMeals, action.payload];
            state.favMeals = newFavMeals;
        },
        removeFavMeal: (state, action: PayloadAction<IMeal>) => {
            const newFavMeals = state.favMeals.filter(meal => meal.idMeal !== action.payload.idMeal);
            state.favMeals = newFavMeals;
        },
        setMealDetail: (state, action: PayloadAction<IMeal | null>) => {
            state.mealDetail = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }

    },
    extraReducers(builder) {
        builder
            // fetch random meal
            .addCase(fetchRandomMeal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRandomMeal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.randomMeal = action.payload
            })
            .addCase(fetchRandomMeal.rejected, (state) => {
                state.isLoading = false;
            })

            // fetch meal detail
            .addCase(fetchMealDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMealDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.mealDetail = action.payload
            })
            .addCase(fetchMealDetail.rejected, (state) => {
                state.isLoading = false;
            })

            // fetch search meals
            .addCase(fetchMealBySearch.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMealBySearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchMeals = action.payload
            })
            .addCase(fetchMealBySearch.rejected, (state) => {
                state.isLoading = false;
            })

            // fetch fav meals by user
            .addCase(fetchFavMeals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFavMeals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favMeals = action.payload
            })
            .addCase(fetchFavMeals.rejected, (state) => {
                state.isLoading = false;
            })
    }

})

export const fetchRandomMeal = createAsyncThunk("meal/fetchRandomMeal", async () => {
    const data = await getRandomMeal();
    if (data?.meals?.length) {
        return data.meals[0];
    }
    return null;
})

export const fetchMealDetail = createAsyncThunk("meal/fetchMealDetail", async (idMeal: string) => {
    const data = await getMealById(idMeal);
    if (data?.meals?.length) {
        return data.meals[0];
    }
    return null;
})

export const fetchMealBySearch = createAsyncThunk("meal/fetchMealBySearch", async (term: string) => {
    const data = await getMealBySearch(term);
    if (data?.meals?.length) {
        return data.meals;
    }
    return null;
})

export const fetchFavMeals = createAsyncThunk("meal/fetchFavMeals", async (userId: string) => {
    const data = await getFavMealsDB(userId);
    if (data) {
        return data;
    }
    return null;
})

export const mealActions = mealSlice.actions

export const mealReducer = mealSlice.reducer
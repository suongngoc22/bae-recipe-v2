import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { IMeal } from "../../types/define-type";
import { db } from "../../firebase/firebase";

export const getRandomMeal = async () => {
    try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        return data;

    } catch (error) {
        console.log("ERROR");
    }
}

export const getMealById = async (idMeal: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log("ERROR");
    }
}

export const getMealBySearch = async (term: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log("ERROR");
    }
}

export const addFavMealDB = async (newMeal: IMeal, userId: string) => {
    try {
        if (newMeal && userId) {
            const userDocRef = doc(db, "users", userId);
            await updateDoc(userDocRef, {
                favMeals: arrayUnion(newMeal)
            });
            console.log("Favorite meal added successfully!");
        }

    } catch (error) {
        console.error("Error adding favorite meal: ", error);
    }
}

export const removeFavMealDB = async (newMeal: IMeal, userId: string) => {
    try {
        if (newMeal && userId) {
            const userDocRef = doc(db, "users", userId);
            await updateDoc(userDocRef, {
                favMeals: arrayRemove(newMeal)
            });
            console.log("Favorite meal removed successfully!");
        }
    } catch (error) {
        console.error("Error removing favorite meal: ", error);
    }
}

export const fetchFavMealsDB = async () => {
    // call api get favMeals by user
}
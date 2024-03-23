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

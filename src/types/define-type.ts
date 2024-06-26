export interface IMeal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions?: string;
    ingredients?: string[];
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

// export interface IUser {
//     email: string;
//     displayName: string;
//     photoUrl: string;
//     favMeals: IMeal[];
// }
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// export const getUserByIdDB = async (userId: string) => {
//     try {
//         if (userId) {
//             const userDocRef = doc(db, "users", userId);
//             const data = await getDoc(userDocRef)

//             if (data.exists()) {
//                 return data;

//             } else {
//                 console.log("No such user data!");
//             }
//         }
//     } catch (error) {
//         console.error("Error fetching user", error);
//     }
// }
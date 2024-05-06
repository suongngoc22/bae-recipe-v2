import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { User as FirebaseUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ILoginFormValues } from "../types/define-type";

export const useAuth = () => {
    const [user, setUser] = useState<FirebaseUser | ILoginFormValues>();
    const [isLoading, setIsLoading] = useState(false);

    const handleUser = (user: FirebaseUser | null) => {
        if (user) {
            setUser(user);
        } else {
            setUser(undefined);
        }
        setIsLoading(false);
    };

    const signIn = async ({ email, password }: ILoginFormValues) => {
        setIsLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);

        return result;
    };

    const signInWithGoogle = async () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setIsLoading(false);
            return result;

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        await auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, handleUser);
        return unsubscribe;
    }, []);

    return { user, isLoading, signIn, signInWithGoogle, signOut }
}
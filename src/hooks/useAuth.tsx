import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { User as FirebaseUser, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ILoginFormValues } from "../types/define-type";
import { FirebaseError } from "firebase/app";

export const useAuth = () => {
    const [user, setUser] = useState<FirebaseUser | ILoginFormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<FirebaseError | null>(null);

    const handleUser = (user: FirebaseUser | null) => {
        if (user) {
            setUser(user);
        } else {
            setUser(undefined);
        }
        setIsLoading(false);
    };

    const signUp = async ({ email, password }: ILoginFormValues) => {
        setIsLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setIsLoading(false);
            console.log("đăng ký thành công");

            return result;

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const signIn = async ({ email, password }: ILoginFormValues) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            handleUser(user);
            setIsLoading(false);

        } catch (error: any) {
            setIsLoading(false);
            setError(error);
        }
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

    const signOut = async (callback: () => void) => {
        await auth.signOut();
        callback();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, handleUser);
        return unsubscribe;
    }, []);

    return { user, isLoading, signUp, signIn, signInWithGoogle, signOut, error }
}
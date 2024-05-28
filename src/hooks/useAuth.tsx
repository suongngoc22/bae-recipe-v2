import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { User as FirebaseUser, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ILoginFormValues } from "../types/define-type";
import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useAuth = () => {
    const [user, setUser] = useState<FirebaseUser>();
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
        setError(null);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            const userData = {
                email: user.email,
                displayName: user.displayName || "",
                photoURL: user.photoURL,
                metadata: {
                    creationTime: user.metadata.creationTime,
                    lastSignInTime: user.metadata.lastSignInTime
                }
            }

            //add user's document
            await setDoc(doc(db, "users", user.uid), userData);

            // handle user state
            handleUser(user);

            return result;

        } catch (error: any) {
            setError(error);
        } finally {
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
            const user = result.user;

            const userData = {
                email: user.email,
                displayName: user.displayName || "",
                photoURL: user.photoURL,
                metadata: {
                    creationTime: user.metadata.creationTime,
                    lastSignInTime: user.metadata.lastSignInTime
                }
            }

            const userDocRef = doc(db, "users", user.uid);

            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) {
                // add user's document
                await setDoc(userDocRef, userData);
                console.log("User document created");
            } else {
                console.log("User document already exists");
            }

        } catch (error) {
            console.log(error);
        } finally {
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

    return { user, isLoading, signUp, signIn, signInWithGoogle, signOut, error, setError }
}
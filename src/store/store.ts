import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase";

export const authStore = writable({
    user: null,
    loading: true,
    data: {}
});

export const authHandler = {
    signup: async (email: string, password: string): Promise<void> => {
        await createUserWithEmailAndPassword(auth, email, password);
    },
    login: async (email: string, password: string): Promise<void> => {
        await signInWithEmailAndPassword(auth, email, password);
    },
    logout: async (): Promise<void> => {
        await signOut(auth);
    }
};

<script lang="ts">
    import { onMount } from 'svelte';
    import { auth, db } from '../lib/firebase/firebase';
    import { getDoc, doc, setDoc } from 'firebase/firestore';
    import { authStore } from "/Users/aidenalfaro/firebase-trial/src/store/Store";

    interface UserData {
        email: string;
        todos: string[];
    }

    interface User {
        uid: string;
        email: string;
    }

    const nonAuthRoutes = ['/', 'product'];

    onMount(() => {
        console.log('Mounting');
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = '/';
            }

            if (user && currentPath === '/') {
                window.location.href = '/dashboard';
                return;
            }

            if (!user) {
                return;
            }

            let dataToSetToStore: UserData;

            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                const userRef = doc(db, 'users', user.uid);
                dataToSetToStore = {
                    email: user.email!,
                    todos: [],
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                const userData = docSnap.data() as UserData;
                dataToSetToStore = userData;
            }
        });
    });
</script>

<div class="mainContainer">
    <slot />
</div>

<style>
    .mainContainer {
        min-height: 100vh;
        background: linear-gradient(to right, #000428, #000046);
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>

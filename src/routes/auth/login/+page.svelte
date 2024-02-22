<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Icon from '@iconify/svelte';
	import { session } from '$lib/session';
	import { auth } from '$lib/firebase';

	import { signInWithEmailAndPassword, type UserCredential } from 'firebase/auth';
	import { goto } from '$app/navigation';

	let email: string = '';
	let password: string = '';

	async function loginWithMail() {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {

				console.log('◉ ▶ .then ▶ result:', result);
				const { user }: UserCredential = result;
				session.set({
					loggedIn: true,
					user: {
						displayName: user?.displayName,
						email: user?.email,
						photoURL: user?.photoURL,
						uid: user?.uid
					}
				});
				goto('/app');
			})
			.catch((error) => {
				return error;
			});
	}
  

</script>

<div class="hero min-h-screen bg-blue-950">
	<div class="hero-content text-center justify-center">
		<Card>
			<div slot="card-body" class="flex flex-col gap-4">
				<h1 class="text-2xl font-bold">Welcome to Atenas!</h1>
				<form class="flex flex-col gap-3" on:submit={loginWithMail}>
					<label class="input input-bordered flex items-center gap-2">
						<Icon icon="fe:mail" />
						<input bind:value={email} type="text" class="grow" placeholder="Email" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						<Icon icon="fe:lock" />
						<input bind:value={password} type="password" class="grow" placeholder="Password" />
					</label>
					<button class="btn btn-primary" type="submit">Login</button>
				</form>
			</div>
		</Card>
	</div>
</div>

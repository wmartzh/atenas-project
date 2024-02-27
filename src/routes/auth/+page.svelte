<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Icon from '@iconify/svelte';
	import { auth, initializeFirebase } from '$lib/firebase';

	import { signInWithEmailAndPassword } from 'firebase/auth';

	let email: string = '';
	let password: string = '';

	let success: boolean | undefined = undefined;
	
	let form: HTMLFormElement;
	async function loginWithMail(event: any) {
		try {

			const { user } = await signInWithEmailAndPassword(auth, email, password);

			if (!user) {
				throw new Error('No user found');
			}

			const token = await user.getIdToken();

			const input = document.createElement('input');
			input.type = 'hidden';
			input.name = 'token';
			input.value = token;

			form.appendChild(input);
			form.submit();
		} catch (error) {
			success = false;
		}
	}
</script>

<div class="hero min-h-screen bg-blue-950">
	<div class="hero-content text-center justify-center">
		<Card>
			<div slot="card-body" class="flex flex-col gap-4">
				<h1 class="text-2xl font-bold">Welcome to Atenas!</h1>
				<form
					class="flex flex-col gap-3"
					bind:this={form}
					on:submit|preventDefault={loginWithMail}
					method="post"
				>
					<label class="input input-bordered flex items-center gap-2">
						<Icon icon="fe:mail" />
						<input bind:value={email} type="text" class="grow" placeholder="Email" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						<Icon icon="fe:lock" />
						<input bind:value={password} type="password" class="grow" placeholder="Password" />
					</label>
					<button class="btn btn-primary">Login</button>
					{#if !success && success !== undefined}
						<div class="p-8 text-red-500 bg-red-100">
							There was an error login. Please try again.
						</div>
					{/if}
				</form>
			</div>
		</Card>
	</div>
</div>

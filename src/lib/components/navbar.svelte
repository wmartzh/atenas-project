<script lang="ts">
	import DropdownMenu from './dropdown-menu.svelte';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { goto } from '$app/navigation';
	export function logout() {
		signOut(auth)
			.then(() => {
				goto('/login');
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-none">
		<label for="sidebar" aria-label="close sidebar" class="lg:hidden btn btn-ghost drawer-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</label>
	</div>
	<div class="flex-1">
		<span class="btn btn-ghost text-xl">Atenas</span>
	</div>
	<div class="flex-none">
		<slot name="navbar-content" ></slot>
	</div>
</div>

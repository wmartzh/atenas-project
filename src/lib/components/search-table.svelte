<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let action: string | null = null;

	const dispatch = createEventDispatcher();

	$: searchText = '';

	async function handleSearch() {
		if (action) {
			const result = await fetch(`${action}?search=${searchText}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			dispatch('search', await result.json());
		}
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-none gap-2">
		<div class="form-control">
			<input
				type="text"
				placeholder="Search"
				class="input input-bordered input-sm w-25 md:w-auto"
				bind:value={searchText}
				on:input={handleSearch}
			/>
		</div>
	</div>
</div>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	export let data: any[];
	export let titles: { label: string; key: string; formatter?: (value: any) => any }[];
	export let editable: boolean | null = false;

	const dispatch = createEventDispatcher();
	let searchText = '';

	function handleSearch(event: Event) {
		dispatch('search', searchText);
	}

	function handleRowClick(row: typeof data) {
		dispatch('row-click', row);
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
<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				{#each titles as title (title.key)}
					<th>{title.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr
					class={editable ? 'clickable' : ''}
					on:click={() => (editable ? handleRowClick(row) : {})}
				>
					{#each titles as title (title.key)}
						{#if title.key === 'action'}
							<td>
								<slot name="action" {row} />
							</td>
						{:else}
							<td>
								{#if title.formatter}
									{title.formatter(row[title.key])}
								{:else}
									{row[title.key]}
								{/if}
							</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	.clickable:hover {
		@apply cursor-pointer bg-slate-400;
		@apply shadow-md;
	}
</style>

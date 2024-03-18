<script lang="ts">
	import type { BreadcrumbInput } from "../types";



	export let items: BreadcrumbInput[] | undefined[]  | null = null;
</script>

<div class="text-sm breadcrumbs">
	<ul>
		{#if items === null}
			<li>Loading...</li>
		{:else if items.length === 0}
			<li>No breadcrumbs</li>
		{:else}
			{#each items as item}
				<li>
					{#if item?.url}
						<a href={item.url}>{item.title}</a>
					{:else}
						<span>{item?.title}</span>
					{/if}
				</li>
			{/each}
		{/if}
	</ul>
</div>

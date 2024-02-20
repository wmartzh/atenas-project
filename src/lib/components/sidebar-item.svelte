<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	export let url: string | null = null;
	export let title: string;
	export let icon: string | null = null;
	export let active = false;

	$: isActive  = active ? 'active' : null
</script>

<li class="{$$restProps.class || ''}">
	<a rel="external" class={isActive} href={url}>
		{#if icon !== null}
			<Icon class="h-5 w-5" {icon}></Icon>
		{/if}
		{title}
	</a>
</li>

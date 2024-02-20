<script lang="ts">
	import Icon from '@iconify/svelte';
	export let href: string | null = null;
	export let title: string;
	export let icon: string | null = null;
	export let active = false;

	$: isActive  = active ? 'active' : null
</script>

<li class="{$$restProps.class || ''}">
	<a class={isActive} {href}>
		{#if icon !== null}
			<Icon class="h-5 w-5" {icon}></Icon>
		{/if}
		{title}
	</a>
</li>

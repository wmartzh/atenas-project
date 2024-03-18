<script lang="ts">
	export let type = 'text';
	export let placeholder: string | undefined = '';
	export let inputClass: string | null =null;

	export let title: string | null = null;
	export let name: string | null = '';
	export let value: string | null = null;
	export let disabled: boolean | null = false;


</script>

<label class={$$restProps.class || 'form-control  w-full max-w-xs  '}>
	{#if title}
		{title}
	{/if}
	<slot name="label" />
	<input {type} {name} {value} {disabled} class={inputClass ?? 'input input-bordered'} {placeholder} />
	<slot name="button-label"/>
</label>


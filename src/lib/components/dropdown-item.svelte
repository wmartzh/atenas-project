<script lang="ts">
	export let title: string = '';
	export let url: string | null = null;
	export let clickHandler: any = null;

	function click(e: any) {
		if (clickHandler) {
			clickHandler(e);
		}
	}
</script>

<li>
	<a href={url} on:click={click}> {title} </a>
</li>

<script lang="ts">
	import Profile from '$lib/components/profile.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hello this is profile</h1>

<div>
	<Profile />
</div>



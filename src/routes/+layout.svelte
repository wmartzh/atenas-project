<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { initializeFirebase } from '$lib/firebase';
	
	onMount(() => {
		initializeFirebase();
	});
</script>

<slot />

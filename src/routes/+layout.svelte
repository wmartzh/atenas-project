<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { initializeFirebase } from '$lib/firebase';
	onMount(() => {
		console.log('Layout mounted');
		initializeFirebase();
	});
</script>

<slot />

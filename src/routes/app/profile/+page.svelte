<script lang="ts">
	import Divider from '$lib/components/divider.svelte';
	import Profile from '$lib/components/profile.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex">
	<!-- Perfil -->
	<div class="w-7/12">
	  <Profile />
	</div>

	<!-- Espacio en blanco -->
	<div class="w-0/12"></div>
</div>

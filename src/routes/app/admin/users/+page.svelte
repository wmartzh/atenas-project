<script lang="ts">
	import Table from '$lib/components/table.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const tableDescriptor = [
		{ label: 'Nombre', key: 'name' },
		{ label: 'Apellido', key: 'lastName' },
		{ label: 'Email', key: 'email' },
		{ label: 'Role', key: 'role' }
	];
</script>

<h1 class="font-semibold text-xl">Users page</h1>

<Table data={data.userList} titles={tableDescriptor}></Table>

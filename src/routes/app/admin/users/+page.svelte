<script lang="ts">
	import Table from '$lib/components/table.svelte';
	import type { Role } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const ROLES_MAP = {
		STUDENT: 'Estudiante',
		MONITOR: 'Monitor',
		PRECEPTOR: 'Preceptor',
		DIRECTOR: 'Director',
		ADMINISTRADOR: 'Administrador'
	};

	const tableDescriptor = [
		{ label: 'Nombre', key: 'name' },
		{ label: 'Apellido', key: 'lastName' },
		{ label: 'Email', key: 'email' },
		{ label: 'Role', key: 'role', formatter: (value: Role) => ROLES_MAP[value] }
	];
	let modal: HTMLDialogElement;
	$: currentState = null;
	function handleRowClick(row: any) {
		console.log(row);
		currentState = row.detail;
		modal.showModal();
	}
	function onSearch(e: any) {
		console.log(e.detail);
	}
</script>

<h1 class="font-semibold text-xl">Users page</h1>
<dialog bind:this={modal} class="modal">
	<div class="modal-box">
		{#if currentState}
			{#each Object.keys(currentState ?? {}) as key}
				<p>{key}: {currentState[key] ?? ''}</p>
			{/each}
		{/if}

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>
<Table
	data={data.userList}
	titles={tableDescriptor}
	on:row-click={handleRowClick}
	on:search={onSearch}
	editable={true}
></Table>

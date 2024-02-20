<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import SidebarItem from '$lib/components/sidebar-item.svelte';
	import Navbar from '../../lib/components/navbar.svelte';
	import { page } from '$app/stores';

	const sidebarItems = [
		{ title: 'Estudiantes', url: '/app/admin/students', icon: 'ph-student' },

	];

	$: currentPage = $page.url.pathname

</script>

<main>
	<div class="drawer lg:drawer-open">
		<input id="sidebar" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content min-full-w">
			<Navbar />
			<div class=" container-mx-auto p-4">
				<slot />

			</div>
		</div>
		<Sidebar>
			{#each sidebarItems as item}
				<SidebarItem
					title={item.title}
					url={item.url}
					icon={item.icon}
					active={currentPage=== item.url}
				/>
			{/each}
		</Sidebar>
	</div>
</main>

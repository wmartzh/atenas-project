<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import SidebarItem from '$lib/components/sidebar-item.svelte';
	import { page } from '$app/stores';

	const sidebarItems = [
		{ title: 'Estudiantes', url: '/app/admin/students', icon: 'ph-student' },
		{ title: 'Perfil', url: '/app/profile', icon: 'iconoir:profile-circle' }
	];
</script>

<main>
	<div class="drawer lg:drawer-open">
		<input id="sidebar" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col p-3 min-full-w">
			<slot />
		</div>
		<Sidebar>
			<div slot="header">
				<h1 class="text-lg">Atenas</h1>
			</div>
			{#each sidebarItems as item}
				<SidebarItem
					title={item.title}
					url={item.url}
					icon={item.icon}
					active={$page.url.pathname === item.url}
				/>
			{/each}
		</Sidebar>
	</div>
</main>

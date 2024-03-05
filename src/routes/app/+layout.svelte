<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import SidebarItem from '$lib/components/sidebar-item.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import DropdownMenu from '$lib/components/dropdown-menu.svelte';
	import DropdownItem from '$lib/components/dropdown-item.svelte';
	import { page } from '$app/stores';

	const sidebarItems = [
		{ title: 'Home', url: '/app', icon: 'fe:home' },
		{ title: 'Students', url: '/app/admin/students', icon: 'ph-student' },
		{ title: 'Users', url: '/app/admin/users', icon: 'tabler:users' },
		{ title: 'Events', url: '/app/admin/events', icon: 'ph:calendar' },
		{ title: 'Attendance', url: '/app/admin/attendance', icon: 'mdi:calendar-edit-outline' }
	];

	$: currentPage = $page.url.pathname;
</script>

<main>
	<div class="drawer lg:drawer-open">
		<input id="sidebar" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content min-full-w">
			<Navbar>
				<div slot="navbar-content">
					<DropdownMenu>
						<div slot="button-content" class="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
						<div slot="content">
							<DropdownItem title="Profile" url="/app/profile" />
							<DropdownItem title="Log out" clickHandler={() => (window.location.href = '/auth')} />
						</div>
					</DropdownMenu>
				</div>
			</Navbar>
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
					active={currentPage === item.url}
				/>
			{/each}
		</Sidebar>
	</div>
</main>

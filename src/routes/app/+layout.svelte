<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import SidebarItem from '$lib/components/sidebar-item.svelte';
	import Navbar from '../../lib/components/navbar.svelte';
	import DropdownMenu from '../../lib/components/dropdown-menu.svelte';
	import { page } from '$app/stores';

	const sidebarItems = [
		{ title: 'Home', url: '/app', icon: 'fe:home' },
		{ title: 'Students', url: '/app/admin/students', icon: 'ph-student' }
	];

	$: currentPage = $page.url.pathname;
	

	function logOut() {

	}

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
							<li>
								<a href="/app/profile"> Profile </a>
							</li>
							<li>
								<button class="btn btn-link"  on:click={logOut}>
									Log out
								<button/>
							</li>
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

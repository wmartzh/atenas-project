<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import SidebarItem from '$lib/components/sidebar-item.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import DropdownMenu from '$lib/components/dropdown-menu.svelte';
	import DropdownItem from '$lib/components/dropdown-item.svelte';
	import BreadCrumb from '$lib/components/breadcrumb.svelte';

	import { page } from '$app/stores';
	import { globalState, setTheme } from '$lib/store/global';
	import type { BreadcrumbInput } from '../../lib/types';

	const sidebarItems = [
		{ title: 'Home', url: '/app', icon: 'fe:home' },
		{ title: 'Students', url: '/app/admin/students', icon: 'ph-student' },
		{ title: 'Users', url: '/app/admin/users', icon: 'tabler:users' },
		{ title: 'Events', url: '/app/admin/events', icon: 'ph:calendar' },
		{ title: 'Attendance', url: '/app/admin/attendance', icon: 'mdi:calendar-edit-outline' }
	];

	$: currentPage = $page.url.pathname;
	$: currentTheme = $globalState.theme === 'dark';

	const changeTheme = (e: MouseEvent) => {
		if ((e.target as HTMLInputElement).checked) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	$: breadcrumbs = $page.url.pathname
		.split('/')
		.map((item, index, arr) => {
			if (item !== 'admin') {
				return {
					title: item.replace(/\b\w/g, (l) => l.toUpperCase()),
					url: arr.slice(0, index + 1).join('/')
				};
			}
		})
		.filter((item) => item !== undefined) as BreadcrumbInput[];
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
							<li>
								<label class="flex cursor-pointer gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										><circle cx="12" cy="12" r="5" /><path
											d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
										/></svg
									>
									<input
										type="checkbox"
										checked={currentTheme}
										value="dark"
										class="toggle theme-controller"
										on:click={changeTheme}
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
									>
								</label>
							</li>
						</div>
					</DropdownMenu>
				</div>
			</Navbar>
			<div class="p-1 bg-gray-700 text-white">
				<BreadCrumb items={breadcrumbs ?? null} />
			</div>
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

<div class="navbar bg-base-100">
	<div class="flex-none">
		<label for="sidebar" aria-label="close sidebar" class="lg:hidden btn btn-ghost drawer-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</label>
	</div>
	<div class="flex-1">
		<span class="btn btn-ghost text-xl">Atenas</span>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<div tabIndex={0} role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					/>
				</div>
			</div>
			<ul
				tabIndex={0}
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a href="/app/profile">
						Profile
						
					</a>
				</li>
		
			</ul>
		</div>
	</div>
</div>

	<div class="dropdown dropdown-end">
			<div tabIndex={0} role="button" class="btn btn-ghost btn-circle avatar">
        <slot name="button-content"></slot>
				
			</div>
			<ul
				tabIndex={0}
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
      <slot name="content"></slot>
				
			</ul>
		</div>
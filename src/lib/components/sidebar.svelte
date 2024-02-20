<div class="drawer-side shadow-md relative h-screen ">
	<label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
	<ul class="menu p-4 flex flex-col  gap-y-1	 w-[200px]  ">
		<slot name="header" />
		<slot  />
		<slot name="footer" />
	</ul>
</div>

<script>
</script>
<div class="drawer-side lg:shadow-md ">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu  bg-base-100 p-4 flex flex-col shadow-md relative h-screen gap-y-1 w-[200px]">
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </ul>
</div>
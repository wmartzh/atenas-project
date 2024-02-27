<script lang="ts">

  export let title: string | null = null;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    {#if title}
      <h2 class="card-title">Card title!</h2>
    {/if}
    <slot name="card-body"></slot>
    <slot name="card-content"></slot>
  </div>
</div>
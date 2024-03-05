<script>
    export let color = 'gray-400';
</script>
  
<style>
    .divider-container {
      display: flex;
      align-items: stretch;
    }
  
    .divider {
      width: 1px;
      flex-grow: 1;
      background-color: #ccc;
    }
</style>
  
<div class="divider-container">
    <div class="divider"></div>
    <div class={`bg-${color} w-full`}></div>
</div>
  
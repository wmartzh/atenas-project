<script lang="ts">

  type ObjOpts ={
    key: string,
    value: string
  }

  export let options: any[] = []
  export let descriptor:ObjOpts | null = null
  export let title = ''
  export let name : string | null = null
  export let value: string | null = null  
  export let disabled: boolean | null = false;
</script>

<select class={"select "+$$restProps.class || 'select'} {name} {value} {disabled}>
  <option disabled selected >{title}</option>

  {#if descriptor}
    {#each options as option}
      <option value={option[descriptor.key]}>{option[descriptor.value]}</option>
    {/each}
  {/if}
  {#if !descriptor}
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  {/if}
  
</select>

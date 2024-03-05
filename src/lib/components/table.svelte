<script lang="ts">
  import { onMount } from 'svelte';

  export let data: any[];
  export let titles: { label: string; key: string }[];

  let searchText = '';
  let filteredData: any[] = [];

  onMount(() => {
      filteredData = [...data];
  });

  function handleSearch(event: Event) {
      const searchInput = event.target as HTMLInputElement;
      searchText = searchInput.value.toLowerCase();

      filteredData = data.filter((row) => {
          return titles.some((title) => {
              const cellValue = row[title.key].toString().toLowerCase();
              return cellValue.includes(searchText);
          });
      });
  }
</script>
<div class="navbar bg-base-100">
  <div class="flex-none gap-2">
      <div class="form-control">
          <input
              type="text"
              placeholder="Search"
              class="input input-bordered input-sm w-25 md:w-auto"
              bind:value="{searchText}"
              on:input="{handleSearch}"
          />
      </div>
  </div>
</div>
<div class="overflow-x-auto">
  <table class="table table-zebra">
      <thead>
          <tr>
              {#each titles as title (title.key)}
                  <th>{title.label}</th>
              {/each}
          </tr>
      </thead>
      <tbody>
          {#each filteredData as row}
              <tr>
                  {#each titles as title (title.key)}
                      <td>{row[title.key]}</td>
                  {/each}
              </tr>
          {/each}
      </tbody>
  </table>
</div>
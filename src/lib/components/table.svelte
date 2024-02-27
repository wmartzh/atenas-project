<script lang="ts">
    export let data: any[];
    export let titles: { label: string; key: string }[];
  </script>
  <div class="overflow-x-auto">
  <table class="table table-xs">
    <thead>
      <tr>
        {#each titles as title (title.key)}
          <th>{title.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each titles as title (title.key)}
            <td>{row[title.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
</table>
</div>
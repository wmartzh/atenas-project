<script lang="ts">
  import Table from "$lib/components/table.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let titles = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Last Name", key: "lastName" },
    { label: "University ID", key: "profile.universityId" },
    { label: "Identification", key: "profile.identification" },
    { label: "Phone Number", key: "profile.phoneNumber" },
    { label: "Nationality", key: "profile.nacionality" },
    { label: "Gender", key: "profile.gender" },
    { label: "Career", key: "profile.career" },
    { label: "Room", key: "User.Profile.room" },
  ];
</script>

<h1 class="font-semibold text-xl">Students page</h1>

<Table data={data.userList} titles={titles}></Table>

//son solo pruebas 
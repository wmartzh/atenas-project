<script>
  export let currentData;
  
  
  let formData = {};
  let saved = false;
  let editing = false; // Nuevo estado para controlar si los campos están en modo edición
  
  function guardar() {
    // Convierte los datos del formulario en texto
    const datosComoTexto = JSON.stringify(formData)

    saved = true;
    editing = false; // Deshabilita la edición después de guardar
  }

  function toggleEdit() {
    editing = !editing; // Alterna entre habilitar y deshabilitar la edición
  }

  function cancel() {
    editing = false; // Deshabilita la edición al cancelar
  }
</script>

<form>
  <div class="space-y-12">
    <h3></h3>
  </div>

  <div class="mt-6 flex items-center justify-center gap-x-6">
    {#if editing}
      <button type="button" on:click={cancel} class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
      <button type="submit" on:click={guardar} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    {:else}
      <button type="button" on:click={toggleEdit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Editar</button>
    {/if}
  </div>
</form>





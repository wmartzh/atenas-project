<script>
  let formData = {};
  let saved = false;
  let editing = false; // Nuevo estado para controlar si los campos están en modo edición

  function guardar() {
    // Convierte los datos del formulario en texto
    const datosComoTexto = JSON.stringify(formData);
    console.log('Datos como texto:', datosComoTexto);

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
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Información personal</h2>

      <br>

      <div class="sm:col-span-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nombre completo</label>
        <div class="mt-2">
          <input id="name" name="name" type="text" autocomplete="name" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="id-university" class="block text-sm font-medium leading-6 text-gray-900">Número de carnet</label>
          <div class="mt-2">
            <input type="text" name="university_id" id="university_id" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="Intentification" class="block text-sm font-medium leading-6 text-gray-900">Identificación / Dimex</label>
          <div class="mt-2">
            <input type="text" name="personal_id" id="personal_id" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="Celphone_Number" class="blockId text-sm font-medium leading-6 text-gray-900">Número de cuarto</label>
          <div class="mt-2">
            <input type="text" name="number_room" id="number_room" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
          <div class="mt-2">
            <input type="text" name="email" id="email" autocomplete="email" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Numero de telefono / WhatsApp</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last_name" autocomplete="family-name" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Nacionalidad</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Costa Rica</option>
              <option>México</option>
              <option>Guatemala</option>
              <option>Belice</option>
              <option>Honduras</option>
              <option>Salvador</option>
              <option>Nicaragua</option>
              <option>Panamá</option>
              <option>Colombia</option>
              <option>Venezuela</option>
            </select>
          </div>
        </div>

        <div class="col-span-full">
          <label for="Carrer" class="block text-sm font-medium leading-6 text-gray-900">Carrera</label>
          <div class="mt-2">
            <input type="text" name="carrer" id="carrer" autocomplete="street-address" disabled={!editing} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

      </div>
    </div>
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





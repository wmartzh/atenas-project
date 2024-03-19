<script>
  let events = [];
  let isModalOpen = false;
  let name = "";
  let date = "";
  let time = "";
  let endTime = "";
  let endDate = "";
  let status = "Pendiente";
  let weekDay = "";
  let selectAllDays = false;
  let daysOfWeek = {
    Domingo: false,
    Lunes: false,
    Martes: false,
    Miércoles: false,
    Jueves: false,
    Viernes: false,
    Sábado: false,
  };

  function addEvent() {
    if (name && date && time && endTime && status && endDate) {
      daysOfWeek[weekDay] = true;
      
      events = [...events, {
        id: generateId(),
        title: name, 
        start: `${date} ${time}`, 
        end: `${endDate} ${endTime}`,
        status: status,
        scheduleDate: date,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        daysOfWeek: daysOfWeek
      }];
      name = "";
      date = "";
      time = "";
      endTime = "";
      endDate = "";
      status = "Pendiente";
      daysOfWeek = {
        Domingo: false,
        Lunes: false,
        Martes: false,
        Miércoles: false,
        Jueves: false,
        Viernes: false,
        Sábado: false,
      };
    }
  }

  function generateId() {
    return Math.random().toString(36).substring(7);
  }

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  function saveEvent() {
    if (name.trim() === "") {
      alert("Por favor, ingresa un nombre para el evento.");
      return;
    }
    if (date === "") {
      alert("Por favor, selecciona una fecha para el evento.");
      return;
    }
    if (time === "") {
      alert("Por favor, selecciona una hora de inicio para el evento.");
      return;
    }
    if (endTime === "") {
      alert("Por favor, selecciona una hora de finalización para el evento.");
      return;
    }
    if (endDate === "") {
      alert("Por favor, selecciona una fecha de finalización para el evento.");
      return;
    }
    let atLeastOneDaySelected = Object.values(daysOfWeek).some(day => day);
    if (!atLeastOneDaySelected) {
      alert("Por favor, selecciona al menos un día para el evento.");
      return;
    }

    addEvent();
    closeModal();
  }

  function cancelEvent() {
    isModalOpen = false;
  }

  function toggleAllDays() {
    selectAllDays = selectAllDays;
    Object.keys(daysOfWeek).forEach(day => {
      daysOfWeek[day] = selectAllDays;
    });
  }
</script>

<h1 class="title1 font-40">Eventos</h1>

<div>
  <ul>
    {#each events as {id, title, start, end, status, scheduleDate, createdAt, updatedAt, daysOfWeek}}
      <li>
        <strong>ID:</strong> {id}<br>
        <strong>Nombre:</strong> {title}<br>
        <strong>Inicio:</strong> {start}<br>
        <strong>Fin:</strong> {end}<br>
        <strong>Estado:</strong> {status}<br>
        <strong>Día(s) de la semana:</strong>
        <ul>
          {#each Object.keys(daysOfWeek) as day}
            {#if daysOfWeek && daysOfWeek[day]}<li>{day}</li>{/if}
          {/each}
        </ul>
        <strong>Fecha programada:</strong> {scheduleDate}<br>
        <strong>Creado en:</strong> {createdAt}<br>
        <strong>Actualizado en:</strong> {updatedAt}
      </li>
      <div class="flex justify-center">
        <button class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
          Editar
        </button>
      </div>
    {/each}
  </ul>
</div>

<button on:click="{openModal}" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
  Nuevo evento
</button>

<div class="modal" class:modal-open="{isModalOpen}" aria-hidden="true">
  <div class="modal-box">
    <h5 class="text-xl font-medium text-gray-700">Crear nuevo evento</h5>
    <button type="button" on:click="{closeModal}" class="text-gray-400 focus:outline-none hover:text-gray-500">
      <span class="sr-only">Cerrar modal</span>
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <div>
      <form>
        <div class="p-6 space-y-4">
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700 mb-2">Nombre del evento</label>
            <input type="text" id="name" name="name" bind:value={name} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
          </div>
          <div class="flex flex-col">
            <label for="date_start" class="text-sm font-medium text-gray-700 mb-2">Fecha de inicio</label>
            <input type="date" id="date_start" name="date_start" bind:value={date} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
          </div>
          <div class="flex flex-col">
            <label for="time_start" class="text-sm font-medium text-gray-700 mb-2">Hora de inicio</label>
            <input type="time" id="time_start" name="time_start" bind:value={time} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
          </div>
          <div class="flex flex-col">
            <label for="time_end" class="text-sm font-medium text-gray-700 mb-2">Hora de finalización</label>
            <input type="time" id="time_end" name="time_end" bind:value={endTime} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
          </div>
          <div class="flex flex-col">
            <label for="date_end" class="text-sm font-medium text-gray-700 mb-2">Fecha de finalización</label>
            <input type="date" id="date_end" name="date_end" bind:value={endDate} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
          </div>
          <div class="flex flex-col">
            <label for="status" class="text-sm font-medium text-gray-700 mb-2">Estado</label>
            <select id="status" name="status" bind:value={status} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
              <option value="Pendiente">Pendiente</option>
              <option value="Confirmado">Confirmado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="select_all_days" name="select_all_days" bind:checked={selectAllDays} on:change={toggleAllDays} class="focus:ring-blue-500 focus:border-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
            <label for="select_all_days" class="ml-2 text-sm text-gray-700">Seleccionar todos los días</label>
          </div>
          <label class="text-sm font-medium text-gray-700 mb-2">Día(s) de la semana</label>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            {#if daysOfWeek}
              {#each Object.keys(daysOfWeek) as day}
                <div class="flex items-center">
                  <input type="checkbox" id="{day.toLowerCase()}" name="{day.toLowerCase()}" bind:checked={daysOfWeek[day]} class="focus:ring-blue-500 focus:border-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                  <label for="{day.toLowerCase()}" class="ml-2 text-sm text-gray-700">{day}</label>
                </div>
              {/each}
            {/if}
          </div>
        </div>
        <div class="flex justify-center space-x-2 p-4 border-t border-gray-200 rounded-b-lg">
          <button type="button" on:click="{cancelEvent}" class="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-md">Cancelar</button>
          <button type="button" on:click="{saveEvent}" class="px-4 py-2 bg-blue-500 text-white rounded-md">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</div>
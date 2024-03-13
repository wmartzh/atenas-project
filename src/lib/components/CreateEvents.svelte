<script>
  /*import { _createEvent, _updateEvent, _deleteEvent } from '../../routes/app/admin/events/+page.server';*/
  /*import { Event, weekDays, eventStatus } from '../../lib/types/event';*/

  let events = [];

  let isModalOpen = false;
  let name = "";
  let date = "";
  let time = "";
  let endTime = "";
  let status = "Pending";
  let weekDay = "Sunday";

  function addEvent() {
    if (name && date && time && endTime && status && weekDay) {
      events = [...events, {id: "",
        title: name, 
        start:`${date} ${time}`, 
        end:`${date} ${endTime}`,
        status: status,
        weekDay: weekDay,
        scheduleDate: date,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }];
      name = "";
      date = "";
      time = "";
      endTime = "";
      status = "Pending";
      weekDay = "Sunday";
    }
  }

  function sortEvents() {
    events.sort((a, b) => new Date(a.start) - new Date(b.start));
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

  function openModal2() {
    isModalOpen = true;
  }

  function closeModal2() {
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

    addEvent();
    closeModal();
  }

  function cancelEvent() {
    isModalOpen = false;
    name = "";
    date = "";
    time = "";
    endTime = "";
    status = "Pending";
    weekDay = "Sunday";
  }
</script>

<h1 class="title1 font-40">Eventos</h1>

<div>
  <ul>
    {#each events as {id, title, start, end, status, weekDay, scheduleDate, createdAt, updatedAt}}
      <li>
        <strong>ID:</strong> {generateId}<br>
        <strong>Nombre:</strong> {title}<br>
        <strong>Inicio:</strong> {start}<br>
        <strong>Fin:</strong> {end}<br>
        <strong>Estado:</strong> {status}<br>
        <strong>Día de la semana:</strong> {weekDay}<br>
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
            <label for="status" class="text-sm font-medium text-gray-700 mb-2">Estado</label>
            <select id="status" name="status" bind:value={status} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
              <option value="Pending">Pendiente</option>
              <option value="Confirmed">Confirmado</option>
              <option value="Canceled">Cancelado</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="weekDay" class="text-sm font-medium text-gray-700 mb-2">Día de la semana</label>
            <select id="weekDay" name="weekDay" bind:value={weekDay} class="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md block w-full p-2.5 border border-gray-300" required>
              <option value="Sunday">Domingo</option>
              <option value="Monday">Lunes</option>
              <option value="Tuesday">Martes</option>
              <option value="Wednesday">Miércoles</option>
              <option value="Thursday">Jueves</option>
              <option value="Friday">Viernes</option>
              <option value="Saturday">Sábado</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end space-x-2 p-4 border-t border-gray-200 rounded-b-lg">
          <button type="button" on:click="{cancelEvent}" class="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-md">Cancelar</button>
          <button type="button" on:click="{saveEvent}" class="px-4 py-2 bg-blue-500 text-white rounded-md">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!--<script>
  let name = "Jorhany";
  let title = "Web Developer";
  let skills = ["HTML", "CSS", "JavaScript"];

  let comments = [];
  let commentTitle = "";
  let commentText = "";
  let extra = "";

  function addComment() {
    if (commentTitle && commentText && extra) {
      comments = [...comments, { title: commentTitle, text: commentText, name: extra }];
      commentTitle = "";
      commentText = "";
      extra = "";
    }
  }
</script>

<main>
  <section class="profile-section">
    <img src="https://www.bing.com/images/search?view=detailV2&ccid=RP6q%2fIch&id=AAB9F6A75A16C3066AD7A3667E4F2FB3265BF070&thid=OIP.RP6q_IchUHbl6131Mo04pQHaHa&mediaurl=https%3a%2f%2fwww.asofiduciarias.org.co%2fwp-content%2fuploads%2f2018%2f06%2fsin-foto.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.44feaafc87215076e5eb5df5328d38a5%3frik%3dcPBbJrMvT35mow%26pid%3dImgRaw%26r%3d0&exph=510&expw=510&q=imagen+de+perfil+sin+foto&simid=608000922578929465&FORM=IRPRST&ck=EDD95CED6C9FCB7FF56CD478FAF33E37&selectedIndex=2&itb=0" alt="Logo de Perfil" />
    <div>
      <h2>{name}</h2>
      <p>{title}</p>
      <ul>
        {#each skills as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="comments-section">
    <h3>Agregar Comentario</h3>
    <form on:submit|preventDefault={addComment}>
      <label>
        Título:
        <input bind:value={commentTitle} />
      </label>
      <label>
        Comentario:
        <input bind:value={commentText} />
      </label>
      <label>
        texto extra:
        <input bind:value={extra} />
      </label>
      <button type="submit">Agregar</button>
    </form>

    <h3>Comentarios</h3>
    <ul>
      {#each comments as { title, text, name }}
        <li>
          <strong>{title}:</strong>
          {text}
          {name}
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }

  h2 {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .comments-section {
    margin-top: 20px;
  }

  form {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }
</style> -->
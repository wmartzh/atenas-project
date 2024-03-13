<!-- <script>
  import { writable } from 'svelte/store';
  import { fetchEvents, createEvent, updateEvent, deleteEvent } from '../../../../server/services/event.service';
  import { EventStatus, weekDays } from '../../../../lib/types/event';

  // Define events as a writable store
  const events = writable([]);

  async function loadEvents() {
    const fetchedEvents = await fetchEvents();
    events.set(fetchedEvents);
  }

  async function addEvent() {
    const eventData = {
      title: 'New Event',
      start: '2024-03-15',
      end: '2024-03-16',
      status: EventStatus.Pending,
      weekDay: weekDays.Monday,
      scheduleDate: '2024-03-15',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await createEvent(eventData);
    await loadEvents();
  }

  async function editEvent(id) {
    const eventData = {
      title: 'Updated Event',
      start: '2024-03-16',
      end: '2024-03-17',
      status: EventStatus.Confirmed,
      weekDay: weekDays.Tuesday,
      scheduleDate: '2024-03-16',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await updateEvent(id, eventData);
    await loadEvents();
  }

  async function removeEvent(id) {
    await deleteEvent(id);
    await loadEvents();
  }

  loadEvents();
</script>

<h1>Events</h1>

{#each $events as event}
  <div>
    <p>{event.title}</p>
    <p>{event.start}</p>
    <p>{event.end}</p>
    <p>{event.status}</p>
    <p>{event.weekDay}</p>
    <p>{event.scheduleDate}</p>
    <p>{event.createdAt}</p>
    <p>{event.updatedAt}</p>
    <button on:click={() => editEvent(event.id)}>Edit</button>
    <button on:click={() => removeEvent(event.id)}>Delete</button>
  </div>
{/each}

<button on:click={addEvent}>Add Event</button> -->

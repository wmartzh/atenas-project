<script context="module" lang="ts">
    import type { PageServerLoad } from '../events/+page.server';
    export type { PageServerLoad };
    import { _createEvent, _updateEvent, _deleteEvent } from '../events/+page.server';
    import type { Event, weekDays, EventStatus } from '../../../../lib/types/event';
  
    export const load: PageServerLoad = async () => {
      const events: Event[] = await import.meta.env.SSR ? [] : [_createEvent({
        id: '',
        title: '',
        start: '',
        end: '',
        status: EventStatus.Pending,
        weekDay: weekDays.Monday,
        scheduleDate: '',
        createdAt: '',
        updatedAt: ''
      })];
      return { events };
    };
  </script>
  
  <script>
    import { onMount } from 'svelte';
  
    let events: Event[] = [];
  
    const fetchEvents = async () => {
      const result = await _createEvent({
        id: '',
        title: '',
        start: '',
        end: '',
        status: EventStatus.Pending,
        weekDay: weekDays.Monday,
        scheduleDate: '',
        createdAt: '',
        updatedAt: ''
      });
      events = [result];
    };
  
    onMount(() => {
      fetchEvents();
    });
  
    const updateEvent = async (eventId: string) => {
      const updatedEvent = {
        title: "Updated Title",
        id: '',
        start: '',
        end: '',
        status: EventStatus.Pending,
        weekDay: weekDays.Monday,
        scheduleDate: '',
        createdAt: '',
        updatedAt: ''
      };
  
      await _updateEvent(eventId, updatedEvent);
      fetchEvents();
    };
  
    const deleteEvent = async (eventId: string) => {
      await _deleteEvent(eventId);
      fetchEvents();
    };
  </script>
  
  <main>
    {#each events as event (event.id)}
      <div>
        <p>{event.title}</p>
        <button on:click={() => updateEvent(event.id)}>Update</button>
        <button on:click={() => deleteEvent(event.id)}>Delete</button>
      </div>
    {/each}
  </main>  
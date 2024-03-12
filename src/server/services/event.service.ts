// Event service page
import { writable } from "svelte/store";
import type { Event, weekDays, EventStatus } from "../../lib/types/event"; 

const events = writable<Event[]>([]);

const eventService = {
  getAll: () => events,
  getById: (id: string) => events.subscribe(eventsList => eventsList.find(event => event.id === id)),
  create: (event: Event) => events.update(eventsList => [...eventsList, event]),
  update: (id: string, updatedEvent: Event) => events.update(eventsList => {
    const index = eventsList.findIndex(event => event.id === id);
    if (index !== -1) {
      eventsList[index] = { ...eventsList[index], ...updatedEvent };
    }
    return [...eventsList];
  }),
  delete: (id: string) => events.update(eventsList => eventsList.filter(event => event.id !== id))
};

export default eventService;

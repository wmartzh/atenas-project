import type { export PageServerLoad } from './$types';
import type { Event, weekDays, EventStatus } from '../../../../lib/types/event'; 
import eventService from '../../../../server/services/event.service' 


export const load: PageServerLoad = async () => {
  const events = await eventService.getAll().subscribe();
  return { events };
};

// Actions
export const _createEvent = async (event: Event) => {
    await eventService.create(event);
};

export const _updateEvent = async (id: string, updatedEvent: Event) => {
    await eventService.update(id, updatedEvent);
};

export const _deleteEvent = async (id: string) => {
    await eventService.delete(id);
    await eventService.delete(id);
};

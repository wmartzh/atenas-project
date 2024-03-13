/*import type { PageServerLoad } from './$types';
import type { Event, weekDays, eventStatus } from '../../../../lib/types/event';
import eventService from '../../../../server/services/event.service'; //No se ha crado nada en este archivo, por eso sale el error

export const load: PageServerLoad = async () => {
    const Event = await eventService.getAll().subscribe();
    return { Events };
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
};*/
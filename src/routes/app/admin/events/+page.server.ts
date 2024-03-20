import { redirect, type RequestEvent } from '@sveltejs/kit';
import eventService from '$server/services/event.service';
import type { Event } from '$lib/types/event.js';
import { $Enums, WeekDays } from '@prisma/client';

export const actions = {
  createEvent: async (event: RequestEvent) => {
    try {
      const formData = Object.fromEntries(
        (await event.request.formData()).entries()
      ) as unknown as Event;


      const response = await eventService.createEvent({
        title: formData.title,
        start: new Date(Number(formData.start)),
        end: new Date(Number(formData.end)),
        status: $Enums.EventStatus[formData.Status as keyof typeof $Enums.EventStatus],
        weekDays: [formData.WeekDay] as unknown as WeekDays[],
        scheduleDate: formData.scheduleDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log("🚀 ~ createEvent: ~ response:", response)
    } catch (error) {

      return {
        status: 500,
        body: 'Error creating account. Please try again.'
      };
    }
    return redirect(303, '/app/admin/events');
  },

  deleteEvent: async (event: RequestEvent) => {
    try {
      const formDataEntries = await event.request.formData();
      const formData = Object.fromEntries(formDataEntries.entries()) as unknown as Event;

      const eventId = formData.id;
      if (!eventId) {
        throw new Error('Event ID is missing.');
      }

      await eventService.deleteEvent({
        where: { id: Number(eventId) }
      });
    } catch (error) {
      return {
        status: 500,
        body: 'Error deleting the event. Please try again.'
      };
    }
    return redirect(303, '/app');
  },

  updateEvent: async (event: RequestEvent) => {
    try {
      const formDataEntries = await event.request.formData();
      const formData = Object.fromEntries(formDataEntries.entries()) as unknown as Event;

      const eventId = formData.id;
      if (!eventId) {
        throw new Error('Event ID is missing.');
      }

      await eventService.updateEvent({
        where: { id: Number(eventId) },
        data: formData as any,
      });
    } catch (error) {
      return {
        status: 500,
        body: 'Error updating the event. Please try again.'
      };
    }
    return redirect(303, '/app/admin/events');
  }

};








// import { redirect, type RequestEvent } from '@sveltejs/kit';
// import eventService from '$server/services/event.service'; // Ensure this import matches the actual path and named export
// import type { Event } from '$lib/types/event.js';

// export const actions = {
//     createEvent: async (event: RequestEvent) => {
//         try {
//             const formData = Object.fromEntries(
//                 (await event.request.formData()).entries()
//             ) as unknown as Event;

//             await eventService.createEvent(formData);
//         } catch (error) {
//             return {
//                 status: 500,
//                 body: 'Error creating event. Please try again.'
//             };
//         }
//         return redirect(303, '/app');
//     },

//     updateEvent: async (event: RequestEvent) => {
//         try {
//             const formData = Object.fromEntries(
//                 (await event.request.formData()).entries()
//             ) as unknown as Event;

//             // Assuming you have the event ID within formData to find the event to update
//             if (!formData.id) {
//                 throw new Error('Event ID is required for updating.');
//             }
//             const id = Number(formData.id); // Convert ID to number for Prisma
//             if (isNaN(id)) {
//                 throw new Error('Event ID must be a valid number.');
//             }
//             await eventService.updateEvent(id, formData);
//         } catch (error) {
//             return {
//                 status: 500,
//                 body: 'Error updating event. Please try again.'
//             };
//         }
//         return redirect(303, '/app');
//     },

//     deleteEvent: async (event: RequestEvent) => {
//         try {
//             // Assuming you pass the event ID as a simple text body
//             const id = Number(await event.request.text()); // Convert text body to number for Prisma
//             if (isNaN(id)) {
//                 throw new Error('Event ID must be a valid number.');
//             }
//             await eventService.deleteEvent(id);
//         } catch (error) {
//             return {
//                 status: 500,
//                 body: 'Error deleting event. Please try again.'
//             };
//         }
//         return redirect(303, '/app');
//     }
// };

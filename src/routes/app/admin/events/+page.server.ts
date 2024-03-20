<<<<<<< HEAD

import { redirect, type RequestEvent } from '@sveltejs/kit';
import { eventService } from '$server/services/event.service';
import type { Event } from '$lib/types/event.js';

export const actions = {
	createEvent: async (event: RequestEvent) => {
		try {
			const formData = Object.fromEntries(
        (await event.request.formData()).entries()
      ) as unknown as Event;

			eventService.createEvent(formData);
		} catch (error) {
			return {
				status: 500,
				body: 'Error creating account. Please try again.'
			};
		}
		return redirect(303, '/app');
	},

  updateEvent: async (event: RequestEvent) => {
		try {
			const formData = Object.fromEntries(
        (await event.request.formData()).entries()
      ) as unknown as Event;

			eventService.createEvent(formData);
		} catch (error) {
			return {
				status: 500,
				body: 'Error creating account. Please try again.'
			};
		}
		return redirect(303, '/app');
	},

  deleteEvent: async (event: RequestEvent) => {
		try {
			const formData = Object.fromEntries(
        (await event.request.formData()).entries()
      ) as unknown as Event;

			eventService.createEvent(formData);
		} catch (error) {
			return {
				status: 500,
				body: 'Error creating account. Please try again.'
			};
		}
		return redirect(303, '/app');
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
=======
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


// create actions
>>>>>>> main

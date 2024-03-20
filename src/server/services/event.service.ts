<<<<<<< HEAD
import type { Event } from '$lib/types/event.js';
import prisma from "$server/prisma.client";
import type { Prisma } from "@prisma/client"

export class eventService {
    static createEvent(formData: Event) {
        console.log("Printing Event Data:");
        for (const key in formData) {
            if (Object.prototype.hasOwnProperty.call(formData, key)) {
                console.log(`${key}: ${formData[key as keyof Event]}`);
            }
        }
        throw new Error('Method not implemented.');
    }

    createEvent(event: Prisma.EventCreateInput) {
        return prisma.event.create({
            data: {
                ...event,
            }
        });
    }
    deleteEvent(event: Prisma.EventCreateInput) {
        return prisma.event.create({
            data: {
                ...event,
            }
        });
    }
    updateEvent(event: Prisma.EventCreateInput) {
        return prisma.event.create({
            data: {
                ...event,
            }
        });
    }
}

export default new eventService();









// import type { Prisma } from "@prisma/client";
// import prisma from "$server/prisma.client";

// export class eventService {
//     static createEvent(formData: Event) {
//         console.log("Printing Event Data:");
//         for (const key in formData) {
//             if (Object.prototype.hasOwnProperty.call(formData, key)) {
//                 console.log(`${key}: ${formData[key as keyof Event]}`);
//             }
//         }
//         throw new Error('Method not implemented.');
//     }

//     createEvent(event: Prisma.EventCreateInput) {
//         return prisma.event.create({
//             data: {
//                 ...event,
//             }
//         });
//     }

//     // Correct implementation for deleteEvent
//     deleteEvent(id: number) {
//         return prisma.event.delete({
//             where: {
//                 id: id,
//             }
//         });
//     }

//     // Correct implementation for updateEvent
//     updateEvent(id: number, data: Prisma.EventUpdateInput) {
//         return prisma.event.update({
//             where: { id: id },
//             data: data,
//         });
//     }
// }

// export default new eventService();








  // async createEvent({ request }: { request: any }) {
    //     try {
    //         const formData = Object.fromEntries(await request.formData());
    //         const { title, start, end, scheduleDate, createdAt, updatedAt } = formData as {
    //             title: string;
    //             start: string;
    //             end: string;
    //             scheduleDate: string;
    //             createdAt: string;
    //             updatedAt: string;
    //         };

    //         await prisma.event.create({
    //             data: {
    //                 title,
    //                 start,
    //                 end,
    //                 scheduleDate,
    //                 createdAt,
    //                 updatedAt,
    //             },
    //         });

    //         return { status: 201 };
    //     } catch (error) {
    //         console.error(error);
    //         return fail(500, { message: 'Error creating event' });
    //     }
    // }
=======
// Event service page
>>>>>>> main

import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  createEvent: async ({ request }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { title, start, end, scheduleDate, createdAt, updatedAt } = formData as {
        title: string;
        start: string;
        end: string;
        scheduleDate: string;
        createdAt: string;
        updatedAt: string;
      };

      await prisma.event.create({
        data: {
          title,
          start,
          end,
          scheduleDate,
          createdAt,
          updatedAt,
        },
      });

      return { status: 201 };
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Error creating event' });
    }
  },
};

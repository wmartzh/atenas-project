import { updated } from "$app/stores";
import { s } from "vitest/dist/reporters-1evA5lom.js";

// Create the event type
export type Event = {
    id: string;
    title: string;
    start: string;
    end: string;
    status: boolean;
    weekDay: weekDays;
    scheduleDate: string;
    createdAt: string;
    updatedAt: string;
};

enum weekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

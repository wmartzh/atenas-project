import { updated } from "$app/stores";
  
  // Create the event type with status as an enum
  export type Event = {
    id: string;
    title: string;
    start: string;
    end: string;
    status: eventStatus;
    weekDay: weekDays;
    scheduleDate: string;
    createdAt: string;
    updatedAt: string;
  };
  
  // Define the weekDays enum
  export enum weekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  export enum eventStatus {
    Pending,
    Confirmed,
    Canceled
  }
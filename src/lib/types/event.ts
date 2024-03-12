// events.ts

import { updated } from "$app/stores";
import type { Event, weekDays, EventStaztus } from "../../lib/types/event"; 

enum weekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

enum EventStatus {
  Pending,
  Confirmed,
  Canceled
}

export type Event = {
  id: string;
  title: string;
  start: string;
  end: string;
  status: EventStatus;
  weekDay: weekDays;
  scheduleDate: string;
  createdAt: string;
  updatedAt: string;
};


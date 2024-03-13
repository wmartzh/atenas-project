import { writable } from 'svelte/store';
import type { Event } from '../../../../lib/types/event'; 

let events: Event[] = [];

const eventsStore = writable(events);

export async function load({ fetch }: { fetch: any }) {
  return {
    props: {
      events: events,
      eventsStore: eventsStore 
    }
  };
}

async function post(request: any) {
  const { title, start, end, status, weekDay, scheduleDate, createdAt, updatedAt } = request.body;
  const id = Math.random().toString(36).substr(2, 9); 

  const newEvent: Event = {
    id,
    title,
    start,
    end,
    status,
    weekDay,
    scheduleDate,
    createdAt,
    updatedAt
  };

  events.push(newEvent);
  eventsStore.set(events);

  return {
    status: 201,
    body: newEvent
  };
}

async function put(request: any) {
  const { id } = request.params;
  const index = events.findIndex(event => event.id === id);

  if (index === -1) {
    return {
      status: 404,
      body: { message: 'Event not found' }
    };
  }

  const { title, start, end, status, weekDay, scheduleDate, createdAt, updatedAt } = request.body;
  const updatedEvent: Event = {
    id,
    title,
    start,
    end,
    status,
    weekDay,
    scheduleDate,
    createdAt,
    updatedAt
  };

  events[index] = updatedEvent;
  eventsStore.set(events);

  return {
    status: 200,
    body: updatedEvent
  };
}

async function del(request: any) {
  const { id } = request.params;
  const index = events.findIndex(event => event.id === id);

  if (index === -1) {
    return {
      status: 404,
      body: { message: 'Event not found' }
    };
  }

  events.splice(index, 1);
  eventsStore.set(events);

  return {
    status: 204,
    body: null
  };
}

export const actions = {
  post,
  put,
  del
};

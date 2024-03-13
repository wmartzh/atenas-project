import type { Event } from '../../lib/types/event';

const API_BASE_URL = 'postgresql://wmartzh:K7iywXf5tjSm@ep-yellow-lab-a5hvi0aq-pooler.us-east-2.aws.neon.tech/atenasdb?sslmode=require'; 

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(`${API_BASE_URL}/events`);
  return await response.json();
}

export async function createEvent(eventData: Event): Promise<Event> {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  return await response.json();
}

export async function updateEvent(id: string, eventData: Event): Promise<Event> {
  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  return await response.json();
}

export async function deleteEvent(id: string): Promise<void> {
  await fetch(`${API_BASE_URL}/events/${id}`, {
    method: 'DELETE'
  });
}

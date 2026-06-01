import type { Event } from './schedule.js';

export function formatMinutes(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;

  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function eventsForDay(date: string, events: Event[]): Event[] {
  return events
    .filter(event => event.date === date)
    .sort((a, b) => a.startMin - b.startMin);
}

export function nextEvent(
  date: string,
  minuteOfDay: number,
  events: Event[]
): Event | undefined {
  return events
    .filter(event => event.date > date || (event.date === date && event.startMin >= minuteOfDay))
    .sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date);
      return dateCompare !== 0 ? dateCompare : a.startMin - b.startMin;
    })[0];
}

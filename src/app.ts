import { events } from './schedule.js';
import { eventsForDay, formatMinutes, nextEvent } from './model.js';

export function renderToday(date: string, minuteOfDay: number): string {
  const todaysEvents = eventsForDay(date, events);
  const upcoming = nextEvent(date, minuteOfDay, events);

  const lines: string[] = [];

  lines.push('ZuriHac 2026');
  lines.push('');

  if (upcoming) {
    lines.push(`Next: ${upcoming.title}`);
    lines.push(`${formatMinutes(upcoming.startMin)}`);
    lines.push('');
  }

  for (const event of todaysEvents) {
    lines.push(`${formatMinutes(event.startMin)} ${event.title}`);
  }

  return lines.join('\n');
}

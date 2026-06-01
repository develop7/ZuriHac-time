export type EventKind =
  | 'talk'
  | 'workshop'
  | 'food'
  | 'break'
  | 'admin'
  | 'track';

export type EventSource = 'HEW' | 'HIW' | 'ZuriHac';

export interface Event {
  date: string;
  startMin: number;
  endMin?: number;
  title: string;
  speaker?: string;
  kind: EventKind;
  source: EventSource;
}

const h = (hours: number, minutes = 0): number => hours * 60 + minutes;

export const events: Event[] = [
  {
    date: '2026-06-04',
    startMin: h(9),
    endMin: h(17),
    title: 'Haskell Ecosystem Workshop',
    speaker: 'Program TBA',
    kind: 'workshop',
    source: 'HEW'
  },

  {
    date: '2026-06-05',
    startMin: h(9, 15),
    endMin: h(10, 15),
    title: 'GHC Status Report',
    speaker: 'Andreas Klebinger',
    kind: 'talk',
    source: 'HIW'
  },

  {
    date: '2026-06-06',
    startMin: h(10),
    endMin: h(11),
    title: 'Another Taste of Verse',
    speaker: 'Simon Peyton Jones',
    kind: 'talk',
    source: 'ZuriHac'
  },

  {
    date: '2026-06-07',
    startMin: h(17),
    endMin: h(18),
    title: 'Haskell Gamedev',
    speaker: 'Garrick Chin',
    kind: 'talk',
    source: 'ZuriHac'
  }
];

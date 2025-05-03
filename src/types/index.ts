
export type EventType = 'hackathon' | 'workshop' | 'techtalk' | 'networking' | 'career';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  college: string;
  type: EventType;
  link: string;
  image?: string;
  featured?: boolean;
  isVirtual?: boolean;
}

export interface EventFilters {
  search: string;
  type: EventType | 'all';
  college: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  location: string;
}

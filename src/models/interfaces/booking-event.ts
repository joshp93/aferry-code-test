import { BookingCompleted } from './booking-completed';

export interface BookingEvent {
  id: string;
  partitionKey: string;
  timestamp: number;
  type: string;
  booking_completed: BookingCompleted;
}

import { KinesisStreamEvent } from 'aws-lambda';
import {
  mapBookingCompleteEventsToExternalBookingCompletedEvents,
  publishBookingCompletedEvents,
} from './services/integration-service';

export const handler = (event: KinesisStreamEvent) => {
  const externalBookingCompleted = mapBookingCompleteEventsToExternalBookingCompletedEvents(
    event
  );
  publishBookingCompletedEvents(externalBookingCompleted).then(() =>
    console.log('All events published successfully')
  );
};

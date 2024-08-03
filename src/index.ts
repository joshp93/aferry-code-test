import { KinesisStreamEvent } from 'aws-lambda';
import {
  mapBookingCompleteEventsToExternalProductOrders,
  publishProductOrdersToExternalServer,
} from './services/integration-service';

export const handler = (event: KinesisStreamEvent) => {
  const externalBookingCompleted = mapBookingCompleteEventsToExternalProductOrders(
    event
  );
  publishProductOrdersToExternalServer(externalBookingCompleted).then(() =>
    console.log('All events published successfully')
  );
};

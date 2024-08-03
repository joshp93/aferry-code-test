import { KinesisStreamEvent } from 'aws-lambda';
import { ExternalProductOrder } from 'src/models/classes/external-product-order';
import { BookingEventType } from 'src/models/enums/BookingEventType';
import { BookingEvent } from 'src/models/interfaces/booking-event';
import axios from 'axios';

export function mapBookingCompleteEventsToExternalProductOrders(
  event: KinesisStreamEvent
) {
  console.log('Received event stream', event);
  const externalProductOrders = Array<ExternalProductOrder>();
  for (const record of event.Records) {
    const bookingEvent: BookingEvent = JSON.parse(atob(record.kinesis.data));
    if (bookingEvent.type === BookingEventType.booking_completed) {
      externalProductOrders.push(
        new ExternalProductOrder(bookingEvent.booking_completed)
      );
      console.log(
        `Adding event with order Id ${bookingEvent.booking_completed.orderId}, type (${bookingEvent.type})`
      );
    }
  }
  console.log(
    `Returning ${externalProductOrders.length} external product orders`
  );
  return externalProductOrders;
}

export function publishProductOrdersToExternalServer(
  externalProductOrders: Array<ExternalProductOrder>
) {
  console.log(
    `Sending ${externalProductOrders.length} requests to external server`
  );
  const promises = externalProductOrders.map((externalProductOrder) =>
    publishProductOrderToExternalServer(externalProductOrder)
  );
  return Promise.allSettled(promises).then((results) => {
    let rejectionCount = 0;
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Server responded', result);
      } else {
        rejectionCount++;
      }
    });
    if (rejectionCount > 0) {
      console.error(`${rejectionCount} error(s) were received`);
    }
  });
}

function publishProductOrderToExternalServer(
  externalProductOrder: ExternalProductOrder
) {
  const requestBody = JSON.stringify(externalProductOrder);

  return new Promise<string>((resolve, reject) => {
    axios
      .post('http://localhost:3000/', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': requestBody.length,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error('There was an error making the request', error);
        reject(error);
      });
  });
}

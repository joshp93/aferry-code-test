import { ExternalBookingCompleted } from 'src/models/classes/external-product-order';

export const EXPECTED_EXTERNAL_BOOKING_COMPLETE_EVENTS: ExternalBookingCompleted[] = [
  {
    product_order_id_buyer: 123461,
    timestamp: '2021-09-13T13:00:59.453Z',
    product_provider_buyer: 'P&O Ferries',
  },
  {
    product_order_id_buyer: 123477,
    timestamp: '2021-09-13T13:00:59.456Z',
    product_provider_buyer: 'Balearia',
  },
];

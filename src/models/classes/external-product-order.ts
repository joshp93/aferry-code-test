import { BookingCompleted } from '../interfaces/booking-completed';

export class ExternalBookingCompleted {
  product_order_id_buyer: number;
  timestamp: string;
  product_provider_buyer: string;

  constructor(bookingCompleted: BookingCompleted) {
    this.product_order_id_buyer = bookingCompleted.orderId;
    this.timestamp = new Date(bookingCompleted.timestamp).toISOString();
    this.product_provider_buyer = bookingCompleted.product_provider;
  }
}

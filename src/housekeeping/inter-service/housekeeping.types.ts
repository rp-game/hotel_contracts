import { NatsResponse } from '../../common';

export interface KeyGenerateRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  roomId?: string;
  guestName?: string;
  checkInDate?: string;
  checkOutDate?: string;
}

export interface KeyGenerateResponse extends NatsResponse {
  data?: {
    keyId?: string;
    keyCode?: string;
  };
}

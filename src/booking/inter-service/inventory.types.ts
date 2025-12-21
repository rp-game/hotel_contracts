import { NatsResponse } from '../../common';

/**
 * Inventory Service - Request/Response Types for Booking Service
 */

export interface CheckRoomAvailabilityRequest {
  tenantId: string;
  hotelId: string;
  roomTypeId?: string;
  roomIds?: string[];
  checkInDate: string;
  checkOutDate: string;
  date?: Date;
  startTime?: string;
  endTime?: string;
  roomCount?: number;
}

export interface RoomAvailabilityResponse {
  roomTypeId: string;
  roomTypeName: string;
  availableRooms: {
    id: string;
    roomNumber: string;
    floor: string;
    status: string;
  }[];
  availableCount: number;
  totalCount: number;
}

export interface BookRoomRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  roomIds: string[];
  checkInDate: string;
  checkOutDate: string;
  startTime?: string;
  endTime?: string;
}

export interface BookRoomPayload {
  tenantId: string;
  hotelId: string;
  roomIds: string[];
  bookingId: string;
  checkInDate: string;
  checkOutDate?: string;
  checkInTime?: string;
  checkOutTime?: string;
}

export interface BookRoomResponse extends NatsResponse {
  data?: {
    bookingId: string;
    results: Array<{ roomId: string; success: boolean; message: string }>;
  };
}

export interface BookRoomDetailedResponse extends NatsResponse {
  data?: {
    bookingId: string;
    bookedRooms: {
      roomId: string;
      roomNumber: string;
      roomType: string;
      floor: number;
      status: 'BOOKED' | 'OCCUPIED';
      bookedFrom: string;
      bookedUntil: string;
      assignedAt: string;
    }[];
    totalRoomsBooked: number;
    conflictedRooms?: {
      roomId: string;
      roomNumber: string;
      reason: string;
      currentBookingId?: string;
    }[];
    pricing?: {
      totalAmount: number;
      currency: string;
      breakdown: {
        roomId: string;
        roomNumber: string;
        baseRate: number;
        nights: number;
        totalRate: number;
      }[];
    };
  };
}

export interface ReleaseRoomRequest {
  tenantId: string;
  hotelId: string;
  bookingId: string;
  roomIds?: string[];
}

export interface RoomStatusResponse extends NatsResponse {
  data?: {
    roomIds?: string[];
  };
}

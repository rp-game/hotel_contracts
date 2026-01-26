/**
 * Room Timeline Details NATS Contracts
 *
 * Patterns:
 * - booking.timeline.room-details
 *
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';

/**
 * Get Room Details for Timeline Request
 * Pattern: booking.timeline.room-details
 *
 * Retrieve detailed timeline information for a specific room on a given date
 */
export interface GetRoomDetailsTimelineRequest {
  roomId: string;
  date: string; // ISO date string (YYYY-MM-DD)
}

/**
 * Timeline Block within a room
 * Represents a time period with a specific event type (booking, maintenance, cleaning, etc)
 */
export interface TimelineBlock {
  id: string;
  startTime: string; // ISO datetime string
  endTime: string;   // ISO datetime string
  type: 'available' | 'pending' | 'confirmed' | 'occupied' | 'maintenance' | 'checkout_ready' | 'cleaning';
  bookingId?: string;
  guestName?: string;
  status?: string;
  actions: string[]; // Available actions for this block
  bookingData?: {
    bookingCode?: string;
    guestEmail?: string;
    guestPhone?: string;
    adultCount?: number;
    childCount?: number;
    specialRequests?: string;
    totalAmount?: number;
  };
}

/**
 * Room Timeline Data
 * Contains all timeline information for a specific room
 */
export interface RoomTimelineDetails {
  roomId: string;
  roomNumber: string;
  roomType: string;
  floor: number;
  capacity: number;
  currentStatus: string; // AVAILABLE, OCCUPIED, CLEANING, MAINTENANCE, OUT_OF_ORDER
  blocks: TimelineBlock[];
  metadata: {
    lastCleaned?: string; // ISO datetime
    nextMaintenance?: string; // ISO datetime
    cleaningTime?: number; // Minutes required
    notes?: string;
  };
}

export type GetRoomDetailsTimelineResponse = RoomTimelineDetails;
export type GetRoomDetailsTimelineNatsResponse = NatsResponse<GetRoomDetailsTimelineResponse>;

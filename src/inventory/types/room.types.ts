/**
 * Inventory Domain Types
 */

import { RoomStatus, RoomTypeAmenity } from '../enums';

/**
 * Room Type entity
 */
export interface RoomType {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  capacity: number;
  beds: number;
  bedType: 'SINGLE' | 'DOUBLE' | 'TWIN' | 'SOFA' | 'BUNK';
  squareMeters: number;
  amenities: RoomTypeAmenity[];
  basePrice: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Individual Room entity
 */
export interface Room {
  id: string;
  tenantId: string;
  hotelId: string;
  roomNumber: string;
  roomTypeId: string;
  roomTypeName: string;
  floor: number;
  status: RoomStatus;
  lastCleanedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Room availability for a date
 */
export interface RoomAvailability {
  roomId: string;
  roomNumber: string;
  roomTypeId: string;
  date: string; // YYYY-MM-DD
  isAvailable: boolean;
  status: RoomStatus;
  occupiedBy?: string; // booking ID if occupied
  blockedReason?: string;
}

/**
 * Room inventory status for a date range
 */
export interface RoomInventoryStatus {
  date: string; // YYYY-MM-DD
  roomTypeId: string;
  roomTypeName: string;
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  maintenanceRooms: number;
  blockedRooms: number;
}

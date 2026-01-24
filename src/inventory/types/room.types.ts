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
  numberOfBeds: number; // Number of beds in this room type (default 1)
  basePrice: number;
  images?: string[];
  amenities?: string[];
  features?: any;
  isActive?: boolean;
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
  currentStatus?: string; // String representation of status (may differ from enum)
  lastCleanedAt?: string;
  features?: Record<string, any>; // Room-specific features (JSONB)
  notes?: string; // Operational notes about the room
  createdAt: string;
  updatedAt: string;
  // Optional fields from associated RoomType (populated in API responses)
  capacity?: number;
  price?: number;
  numberOfBeds?: number;
  amenities?: string[];
  // Booking statistics (populated on demand)
  bookingCount?: number;
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

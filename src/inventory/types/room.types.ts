/**
 * Inventory Domain Types
 */

import { ApiProperty } from '@nestjs/swagger';
import { RoomStatus, RoomTypeAmenity } from '../enums';

/**
 * Room Type entity
 *
 * Note: basePrice is string because PostgreSQL decimal type is returned as string by TypeORM
 * to avoid precision loss. Frontend should parse to number if needed for calculations.
 */
export class RoomType {
  @ApiProperty({ description: 'Room type ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room type name' })
  name: string;

  @ApiProperty({ description: 'Room type description', required: false })
  description?: string;

  @ApiProperty({ description: 'Maximum occupancy capacity' })
  capacity: number;

  @ApiProperty({ description: 'Number of beds in this room type' })
  numberOfBeds: number;

  @ApiProperty({
    description: 'Base price per night (returned as string from PostgreSQL decimal to preserve precision)',
    type: String,
    example: '1000000.00'
  })
  basePrice: string;

  @ApiProperty({
    description: 'Room type images',
    type: [String],
    required: false,
    nullable: true
  })
  images?: string[] | null;

  @ApiProperty({
    description: 'Room amenities',
    type: [String],
    required: false,
    nullable: true
  })
  amenities?: string[] | null;

  @ApiProperty({
    description: 'Room feature tags (e.g., ["Non-smoking", "City View"])',
    type: [String],
    required: false,
    nullable: true
  })
  features?: string[] | null;

  @ApiProperty({ description: 'Whether the room type is active', required: false })
  isActive?: boolean;

  @ApiProperty({ description: 'Creation timestamp (ISO format)' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp (ISO format)' })
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

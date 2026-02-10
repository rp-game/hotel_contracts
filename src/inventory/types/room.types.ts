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
export class Room {
  @ApiProperty({ description: 'Room ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiProperty({ description: 'Floor number' })
  floor: number;

  @ApiProperty({ description: 'Room status', enum: RoomStatus })
  status: RoomStatus;

  @ApiProperty({ 
    description: 'String representation of status (may differ from enum)', 
    required: false 
  })
  currentStatus?: string;

  @ApiProperty({ 
    description: 'Last cleaned timestamp (ISO format)', 
    required: false 
  })
  lastCleanedAt?: string;

  @ApiProperty({
    description: 'Room-specific features (JSONB)',
    required: false
  })
  features?: Record<string, any>;

  @ApiProperty({ 
    description: 'Operational notes about the room', 
    required: false 
  })
  notes?: string;

  @ApiProperty({ description: 'Creation timestamp (ISO format)' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp (ISO format)' })
  updatedAt: string;

  // Optional fields from associated RoomType (populated in API responses)
  @ApiProperty({ 
    description: 'Room capacity (from RoomType)', 
    required: false 
  })
  capacity?: number;

  @ApiProperty({ 
    description: 'Room price (from RoomType)', 
    required: false 
  })
  price?: number;

  @ApiProperty({ 
    description: 'Number of beds (from RoomType)', 
    required: false 
  })
  numberOfBeds?: number;

  @ApiProperty({ 
    description: 'Room amenities (from RoomType)', 
    type: [String],
    required: false 
  })
  amenities?: string[];

  // Booking statistics (populated on demand)
  @ApiProperty({ 
    description: 'Number of bookings for this room', 
    required: false 
  })
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

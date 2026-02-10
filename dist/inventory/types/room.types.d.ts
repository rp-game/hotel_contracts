/**
 * Inventory Domain Types
 */
import { RoomStatus } from '../enums';
/**
 * Room Type entity
 *
 * Note: basePrice is string because PostgreSQL decimal type is returned as string by TypeORM
 * to avoid precision loss. Frontend should parse to number if needed for calculations.
 */
export declare class RoomType {
    id: string;
    tenantId: string;
    hotelId: string;
    name: string;
    description?: string;
    capacity: number;
    numberOfBeds: number;
    basePrice: string;
    images?: string[] | null;
    amenities?: string[] | null;
    features?: string[] | null;
    isActive?: boolean;
    createdAt: string;
    updatedAt: string;
}
/**
 * Individual Room entity
 */
export declare class Room {
    id: string;
    tenantId: string;
    hotelId: string;
    roomNumber: string;
    roomTypeId: string;
    roomTypeName: string;
    floor: number;
    status: RoomStatus;
    currentStatus?: string;
    lastCleanedAt?: string;
    features?: Record<string, any>;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    capacity?: number;
    price?: number;
    numberOfBeds?: number;
    amenities?: string[];
    bookingCount?: number;
}
/**
 * Room availability for a date
 */
export interface RoomAvailability {
    roomId: string;
    roomNumber: string;
    roomTypeId: string;
    date: string;
    isAvailable: boolean;
    status: RoomStatus;
    occupiedBy?: string;
    blockedReason?: string;
}
/**
 * Room inventory status for a date range
 */
export interface RoomInventoryStatus {
    date: string;
    roomTypeId: string;
    roomTypeName: string;
    totalRooms: number;
    availableRooms: number;
    occupiedRooms: number;
    maintenanceRooms: number;
    blockedRooms: number;
}
//# sourceMappingURL=room.types.d.ts.map
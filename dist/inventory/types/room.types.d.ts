/**
 * Inventory Domain Types
 */
import { RoomStatus } from '../enums';
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
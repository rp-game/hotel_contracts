/**
 * Amenities NATS Contracts
 * Patterns: housekeeping.amenities.*
 */
import { NatsResponse } from '../../common';
export declare class Amenity {
    id: string;
    name: string;
    description?: string;
    category?: string;
    cost?: number;
    estimatedTime?: number;
    isAvailable: boolean;
    tenantId: string;
    hotelId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export interface CreateAmenityNatsRequest {
    name: string;
    description?: string;
    category?: string;
    cost?: number;
    estimatedTime?: number;
    isAvailable?: boolean;
    tenantId: string;
    hotelId: string;
}
export type CreateAmenityNatsResponse = NatsResponse<Amenity>;
export interface FindAllAmenitiesNatsRequest {
    tenantId: string;
    hotelId: string;
    category?: string;
    page?: number;
    limit?: number;
}
export declare class AmenitiesListData {
    data: Amenity[];
    total: number;
    page: number;
    limit: number;
}
export type FindAllAmenitiesNatsResponse = NatsResponse<AmenitiesListData>;
export interface FindOneAmenityNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type FindOneAmenityNatsResponse = NatsResponse<Amenity>;
export interface UpdateAmenityNatsRequest {
    id: string;
    updateAmenityDto: {
        name?: string;
        description?: string;
        category?: string;
        cost?: number;
        estimatedTime?: number;
        isAvailable?: boolean;
    };
    tenantId: string;
    hotelId: string;
}
export type UpdateAmenityNatsResponse = NatsResponse<Amenity>;
export interface RemoveAmenityNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type RemoveAmenityNatsResponse = NatsResponse<null>;
//# sourceMappingURL=amenities.nats.d.ts.map
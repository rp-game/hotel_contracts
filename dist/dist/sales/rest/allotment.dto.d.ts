/**
 * Allotment REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
 */
export declare class AllotmentDetailDto {
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    daysOfWeek?: number[] | null;
}
export declare class CreateAllotmentDto {
    hotelId?: string;
    partnerId: string;
    partnerType: string;
    partnerName: string;
    contractNumber?: string;
    startDate: string;
    endDate: string;
    releaseDays: number;
    inventoryControl: string;
    ratePlanId?: string;
    notes?: string;
    details: AllotmentDetailDto[];
}
export declare class UpdateAllotmentDto {
    startDate?: string;
    endDate?: string;
    releaseDays?: number;
    inventoryControl?: string;
    ratePlanId?: string;
    status?: string;
    notes?: string;
}
export declare class FindAllotmentsQueryDto {
    hotelId?: string;
    partnerId?: string;
    partnerType?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}
export declare class AllotmentReleaseDto {
    dates: string[];
    roomTypeId?: string;
}
export declare class AllotmentStopSellDto {
    dates: string[];
    roomTypeId?: string;
    stopSell: boolean;
}
export declare class CheckAllotmentAvailabilityQueryDto {
    partnerId: string;
    partnerType: string;
    roomTypeId: string;
    stayDates: string[];
}
export declare class AllotmentDetailResponseDto {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    daysOfWeek?: number[] | null;
}
export declare class AllotmentResponseDto {
    id: string;
    partnerId: string;
    partnerType: string;
    partnerName: string;
    contractNumber?: string;
    startDate: string;
    endDate: string;
    releaseDays: number;
    inventoryControl: string;
    ratePlanId?: string;
    status: string;
    notes?: string;
    totalAllottedRooms?: number;
    totalPickedUpRooms?: number;
    utilizationPercent?: number;
    details?: AllotmentDetailResponseDto[];
    createdByName?: string;
    createdAt: string;
    updatedAt: string;
}
export declare class AllotmentListResponseDto {
    allotments: AllotmentResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class AllotmentDailyInventoryResponseDto {
    date: string;
    roomTypeId: string;
    roomTypeName?: string;
    allottedRooms: number;
    pickedUpRooms: number;
    releasedRooms: number;
    stopSell: boolean;
    available: number;
}
export declare class AllotmentPickupResponseDto {
    daily: AllotmentDailyInventoryResponseDto[];
}
export declare class AllotmentAvailabilityResponseDto {
    allotmentId?: string;
    inventoryControl?: string;
    availableDates: string[];
    unavailableDates: string[];
}
export declare class AllotmentSummaryResponseDto {
    totalActiveAllotments: number;
    totalHeldRooms: number;
    totalPickedUpRooms: number;
    utilizationPercent: number;
    upcomingReleases: number;
}
//# sourceMappingURL=allotment.dto.d.ts.map
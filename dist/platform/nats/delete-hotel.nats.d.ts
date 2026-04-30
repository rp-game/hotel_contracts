export declare class HotelHardDeleteNatsRequest {
    hotelId: string;
    tenantId: string;
    tenantType: string;
    requestedBy: string;
    timestamp: string;
}
export declare class HotelHardDeleteNatsResponse {
    success: boolean;
    hotelId: string;
    deletedCount: number;
    message?: string;
    error?: string;
}
//# sourceMappingURL=delete-hotel.nats.d.ts.map
export declare class CheckBookingConflictsNatsRequest {
    roomId: string;
    checkIn: string;
    checkOut: string;
}
export declare class AnalyzeBookingConflictsNatsRequest {
    hotelId: string;
    roomId?: string;
    startDate?: string;
    endDate?: string;
}
export declare class SimpleDetectConflictsNatsRequest {
    hotelId: string;
    roomId?: string;
    startDate?: string;
    endDate?: string;
}
export declare class SimpleConflictStatsNatsRequest {
    hotelId: string;
    tenantId?: string;
}
//# sourceMappingURL=check-conflict.nats.d.ts.map
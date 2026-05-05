/** Fired by any service after calling a 3rd-party API, consumed by user-service */
export interface ApiLogEvent {
    /** Which internal service fired this (e.g. 'einvoice', 'payment', 'channel') */
    service: string;
    /** 3rd-party provider name (e.g. 'HILO', 'VNPAY', 'STAAH') */
    provider: string;
    /** tenantId that owns this call */
    tenantId: string;
    /** hotelId if applicable */
    hotelId?: string;
    /** HTTP method of outbound call */
    method: string;
    /** Full URL called */
    url: string;
    /** All request headers (server-to-server, no browser cookies) */
    requestHeaders?: Record<string, string>;
    /** Request body (full, caller responsible for redacting secrets before emit) */
    requestBody?: any;
    /** HTTP status code received */
    responseStatus: number;
    /** All response headers */
    responseHeaders?: Record<string, string>;
    /** Response body (full) */
    responseBody?: any;
    /** ms from request sent to response received */
    durationMs: number;
    /** ISO timestamp when request was sent */
    requestedAt: string;
    /** ISO timestamp when response was received */
    respondedAt: string;
    /** true if responseStatus < 400 and no network error */
    success: boolean;
    /** Error message if network/timeout error (not HTTP error) */
    errorMessage?: string;
    /** Optional correlation id for tracing */
    correlationId?: string;
}
export interface FindApiLogsNatsRequest {
    /** Required for platform-admin scope */
    tenantId?: string;
    hotelId?: string;
    service?: string;
    provider?: string;
    method?: string;
    /** Filter by success/failure */
    success?: boolean;
    /** Filter responseStatus >= this value (e.g. 400 to see errors) */
    statusMin?: number;
    /** Filter responseStatus <= this value */
    statusMax?: number;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class FindApiLogsQueryDto {
    tenantId?: string;
    hotelId?: string;
    service?: string;
    provider?: string;
    method?: string;
    success?: boolean;
    statusMin?: number;
    statusMax?: number;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export declare class ApiLogResponseDto {
    id: string;
    service: string;
    provider: string;
    tenantId: string;
    hotelId?: string;
    method: string;
    url: string;
    requestHeaders?: Record<string, string>;
    requestBody?: any;
    responseStatus: number;
    responseHeaders?: Record<string, string>;
    responseBody?: any;
    durationMs: number;
    requestedAt: string;
    respondedAt: string;
    success: boolean;
    errorMessage?: string;
    correlationId?: string;
}
export declare class ApiLogListResponseDto {
    data: ApiLogResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
//# sourceMappingURL=api-log.event.d.ts.map
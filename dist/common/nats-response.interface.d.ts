/**
 * NATS Response Interface - THE CANONICAL DEFINITION
 *
 * This is the SINGLE SOURCE OF TRUTH for all NATS message responses
 * in the Hotel Management System. All microservices MUST use this interface.
 *
 * Replace all local NatsResponse definitions with imports from this file:
 * import { NatsResponse } from '@hotel/contracts/common';
 *
 * Breaking changes to this interface require major version bump.
 */
/**
 * Standard NATS response format for all inter-service communication
 *
 * @template T - The data type returned on success
 *
 * @example
 * ```typescript
 * interface GetBookingResponse {
 *   bookingId: string;
 *   bookingCode: string;
 * }
 *
 * type GetBookingNatsResponse = NatsResponse<GetBookingResponse>;
 *
 * // In NATS handler:
 * return {
 *   success: true,
 *   data: { bookingId: 'abc123', bookingCode: 'BK001' }
 * };
 * ```
 */
export interface NatsResponse<T = any> {
    /**
     * Indicates whether the operation was successful
     */
    success: boolean;
    /**
     * The response data (only present if success === true)
     */
    data?: T;
    /**
     * Optional status/error code (e.g., 'NOT_FOUND', 'VALIDATION_ERROR', 'BAD_REQUEST')
     */
    status?: string;
    /**
     * Bilingual message - used for both success and error messages
     * On success: describes the operation result
     * On error: contains the error description
     */
    message?: {
        en: string;
        vi: string;
        [key: string]: string;
    };
}
/**
 * Paginated NATS response for list operations
 *
 * @template T - The array item type
 *
 * @example
 * ```typescript
 * interface Booking {
 *   id: string;
 *   code: string;
 * }
 *
 * type GetBookingsNatsResponse = NatsPaginatedResponse<Booking>;
 *
 * // In NATS handler:
 * return {
 *   success: true,
 *   data: [{ id: '1', code: 'BK001' }, ...],
 *   pagination: {
 *     total: 150,
 *     page: 1,
 *     limit: 50,
 *     totalPages: 3
 *   }
 * };
 * ```
 */
export interface NatsPaginatedResponse<T> extends NatsResponse<T[]> {
    /**
     * Pagination metadata
     */
    pagination?: {
        /** Total number of items */
        total: number;
        /** Current page number (1-indexed) */
        page: number;
        /** Items per page */
        limit: number;
        /** Total number of pages */
        totalPages: number;
    };
}
//# sourceMappingURL=nats-response.interface.d.ts.map
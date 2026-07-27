/**
 * Smart Booking Search NATS Contract
 *
 * NATS Pattern: booking.search_smart
 * Handler: booking-service (smartBookingSearch handler)
 * Called by: api-gateway
 * Used by: SmartBooking page (/dashboard/bookings/create)
 *
 * Purpose: Search and rank available rooms/bookings with AI-powered recommendations
 * Returns: Ranked list of recommendations with confidence scores and alternative suggestions
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Smart search request - includes guest requirements and preferences
 */
export interface SmartSearchRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (specific property)
     */
    hotelId: string;
    /**
     * Check-in date (YYYY-MM-DD)
     */
    checkInDate: string;
    /**
     * Check-out date (YYYY-MM-DD)
     */
    checkOutDate: string;
    /**
     * Number of adults
     */
    adultCount: number;
    /**
     * Number of children (optional)
     */
    childCount?: number;
    /**
     * Budget constraints (optional)
     */
    budgetRange?: {
        /**
         * Minimum acceptable price
         */
        min?: number;
        /**
         * Maximum acceptable price
         */
        max?: number;
    };
    /**
     * Guest preferences (optional)
     */
    preferences?: {
        /**
         * Preferred room types (e.g., ['DOUBLE', 'SUITE'])
         */
        roomTypes?: string[];
        /**
         * Desired amenities (e.g., ['WiFi', 'AC', 'Balcony'])
         */
        amenities?: string[];
        /**
         * Floor preference: 'LOW' (1-2), 'MIDDLE' (3-5), 'HIGH' (6+), 'ANY'
         */
        floorPreference?: 'LOW' | 'MIDDLE' | 'HIGH' | 'ANY';
        /**
         * Accessibility requirements (e.g., ['WheelchairAccess', 'ElevatorAccess'])
         */
        accessibility?: string[];
    };
    /**
     * Guest email (optional - for profile lookup)
     */
    guestEmail?: string;
    /**
     * Special requests (optional)
     */
    specialRequests?: string;
}
/**
 * Smart Recommendation - individual room recommendation with scoring
 * Used by: SmartSearchResponseDto (recommendations[] + suggestions[])
 */
export declare class AlternativeDateDto {
    checkIn: string;
    checkOut: string;
    reason: string;
}
export declare class AvailabilityInfoDto {
    isAvailable: boolean;
    alternativeDates?: AlternativeDateDto[];
}
export declare class PromotionSummaryDto {
    id: string;
    name: string;
    description: string;
    discount: string;
    applicable: boolean;
}
export declare class SmartRecommendation {
    /**
     * Unique recommendation ID
     */
    id: string;
    /**
     * Room ID
     */
    roomId: string;
    /**
     * Room number (e.g., '101', '205')
     */
    roomNumber: string;
    /**
     * Room type (e.g., 'DOUBLE', 'SUITE')
     */
    roomType: string;
    /**
     * Confidence score (0-100)
     * Calculated based on match between room and guest requirements
     * 80+: Top match, 60-79: Good match, <60: Alternative option
     */
    confidence: number;
    /**
     * Why this room is recommended (e.g., ['Price within budget', 'Preferred amenities'])
     */
    reasons: string[];
    /**
     * Pricing information
     */
    pricing: {
        basePrice: string;
        dynamicPrice: string;
        discountAmount?: string;
        totalPrice: string;
        pricePerNight: string;
    };
    /**
     * Room availability status
     */
    availability: AvailabilityInfoDto;
    /**
     * Room features (e.g., ['King bed', 'Work desk', 'Mini bar'])
     */
    features: string[];
    /**
     * Room amenities (e.g., ['WiFi', 'Air Conditioning', 'Hot water'])
     */
    amenities: string[];
    /**
     * Guest match score (0-10)
     * Based on how well room matches guest preferences
     */
    guestMatchScore: number;
    /**
     * Room upgrade information (if this is an upgrade offer)
     */
    upgrade: {
        isUpgrade: boolean;
        upgradeType?: 'COMPLIMENTARY' | 'PAID' | 'LOYALTY';
        originalRoomType?: string;
    };
    /**
     * Available promotions for this room
     */
    promotions: PromotionSummaryDto[];
}
/**
 * Smart search response - ranked recommendations with suggestions
 * Used by: api-gateway smartBookingSearch endpoint
 */
export declare class SmartSearchResponseDto {
    /**
     * Top recommendations ranked by confidence score
     * Typically 3-5 best matches
     */
    recommendations: SmartRecommendation[];
    /**
     * Alternative suggestions if top recommendations not suitable
     * Can be alternative date options, similar rooms, etc.
     */
    suggestions?: SmartRecommendation[];
    /**
     * Overall match score for the search request (0-100)
     */
    matchScore: number;
    /**
     * Total number of available options considered
     */
    total: number;
    /**
     * When search was performed
     */
    searchedAt: string;
}
/**
 * NATS request type (usually same as SmartSearchRequest)
 */
export type SmartSearchNatsRequest = SmartSearchRequest;
/**
 * NATS response type
 */
export type SmartSearchNatsResponse = NatsResponse<SmartSearchResponseDto>;
//# sourceMappingURL=smart-search.nats.d.ts.map
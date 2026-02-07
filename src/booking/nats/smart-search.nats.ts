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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
export class SmartRecommendation {
  /**
   * Unique recommendation ID
   */
  @ApiProperty({ description: 'Unique recommendation ID' })
  id: string;

  /**
   * Room ID
   */
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  /**
   * Room number (e.g., '101', '205')
   */
  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  /**
   * Room type (e.g., 'DOUBLE', 'SUITE')
   */
  @ApiProperty({ description: 'Room type' })
  roomType: string;

  /**
   * Confidence score (0-100)
   * Calculated based on match between room and guest requirements
   * 80+: Top match, 60-79: Good match, <60: Alternative option
   */
  @ApiProperty({ description: 'Confidence score 0-100', example: 85 })
  confidence: number;

  /**
   * Why this room is recommended (e.g., ['Price within budget', 'Preferred amenities'])
   */
  @ApiProperty({ description: 'Reasons for recommendation', type: [String] })
  reasons: string[];

  /**
   * Pricing information
   */
  @ApiProperty({
    description: 'Pricing information',
    type: 'object',
    properties: {
      basePrice: { type: 'string', description: 'Base price per night' },
      dynamicPrice: { type: 'string', description: 'Dynamic adjusted price' },
      discountAmount: { type: 'string', description: 'Discount if applicable' },
      totalPrice: { type: 'string', description: 'Total price for stay' },
      pricePerNight: { type: 'string', description: 'Price per night' }
    }
  })
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
  @ApiProperty({
    description: 'Availability information',
    type: 'object',
    properties: {
      isAvailable: { type: 'boolean', description: 'Is room available for dates' },
      alternativeDates: {
        type: 'array',
        description: 'Alternative date options if requested dates unavailable',
        items: {
          type: 'object',
          properties: {
            checkIn: { type: 'string', description: 'Alternative check-in date' },
            checkOut: { type: 'string', description: 'Alternative check-out date' },
            reason: { type: 'string', description: 'Reason for alternative dates' }
          }
        }
      }
    }
  })
  availability: {
    isAvailable: boolean;
    alternativeDates?: Array<{
      checkIn: string;
      checkOut: string;
      reason: string;
    }>;
  };

  /**
   * Room features (e.g., ['King bed', 'Work desk', 'Mini bar'])
   */
  @ApiProperty({ description: 'Room features', type: [String] })
  features: string[];

  /**
   * Room amenities (e.g., ['WiFi', 'Air Conditioning', 'Hot water'])
   */
  @ApiProperty({ description: 'Room amenities', type: [String] })
  amenities: string[];

  /**
   * Guest match score (0-10)
   * Based on how well room matches guest preferences
   */
  @ApiProperty({ description: 'Guest match score 0-10', example: 8.5 })
  guestMatchScore: number;

  /**
   * Room upgrade information (if this is an upgrade offer)
   */
  @ApiProperty({
    description: 'Room upgrade information',
    type: 'object',
    properties: {
      isUpgrade: { type: 'boolean', description: 'Is this an upgrade offer' },
      upgradeType: { type: 'string', enum: ['COMPLIMENTARY', 'PAID', 'LOYALTY'], description: 'Type of upgrade' },
      originalRoomType: { type: 'string', description: 'Original booked room type' }
    }
  })
  upgrade: {
    isUpgrade: boolean;
    upgradeType?: 'COMPLIMENTARY' | 'PAID' | 'LOYALTY';
    originalRoomType?: string;
  };

  /**
   * Available promotions for this room
   */
  @ApiProperty({
    description: 'Available promotions',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'Promotion ID' },
        name: { type: 'string', description: 'Promotion name' },
        description: { type: 'string', description: 'Promotion description' },
        discount: { type: 'string', description: 'Discount amount/percentage' },
        applicable: { type: 'boolean', description: 'Is applicable for this booking' }
      }
    }
  })
  promotions: Array<{
    id: string;
    name: string;
    description: string;
    discount: string;
    applicable: boolean;
  }>;
}

/**
 * Smart search response - ranked recommendations with suggestions
 * Used by: api-gateway smartBookingSearch endpoint
 */
export class SmartSearchResponseDto {
  /**
   * Top recommendations ranked by confidence score
   * Typically 3-5 best matches
   */
  @ApiProperty({
    description: 'Top recommendations ranked by confidence',
    type: [SmartRecommendation]
  })
  recommendations: SmartRecommendation[];

  /**
   * Alternative suggestions if top recommendations not suitable
   * Can be alternative date options, similar rooms, etc.
   */
  @ApiPropertyOptional({
    description: 'Alternative recommendation suggestions',
    type: [SmartRecommendation]
  })
  suggestions?: SmartRecommendation[];

  /**
   * Overall match score for the search request (0-100)
   */
  @ApiProperty({ description: 'Overall match score 0-100', example: 78 })
  matchScore: number;

  /**
   * Total number of available options considered
   */
  @ApiProperty({ description: 'Total available options', example: 15 })
  total: number;

  /**
   * When search was performed
   */
  @ApiProperty({ description: 'Timestamp of search', example: '2024-02-07T10:30:00Z' })
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

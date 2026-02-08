import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Comprehensive Tenant Settings Type
 */
export interface TenantSettings {
  // Booking & Reservation Settings
  defaultCheckInTime?: string;
  defaultCheckOutTime?: string;
  maxAdvanceBookingDays?: number;
  minAdvanceBookingHours?: number;
  allowSameDayBooking?: boolean;
  requireDeposit?: boolean;
  depositPercentage?: number;

  // Cancellation Policy
  freeCancellationHours?: number;
  cancellationFeePercentage?: number;
  noCancellationPolicy?: boolean;

  // Room Assignment
  allowRoomUpgrade?: boolean;
  autoAssignRooms?: boolean;
  roomAssignmentStrategy?: 'MANUAL' | 'AUTOMATIC' | 'HYBRID';

  // Pricing & Revenue
  dynamicPricing?: boolean;
  seasonalRates?: boolean;
  weekendSurcharge?: number;
  holidaySurcharge?: number;

  // Guest Management
  requireGuestId?: boolean;
  allowWalkIn?: boolean;
  maxGuestsPerRoom?: number;
  childAge?: number;

  // Payment & Billing
  acceptedPaymentMethods?: string[];
  autoGenerateInvoice?: boolean;
  sendPaymentReminder?: boolean;

  // Operations
  housekeepingBuffer?: number;
  maintenanceWindow?: {
    startTime: string;
    endTime: string;
  };

  // Notifications & Communication
  sendBookingConfirmation?: boolean;
  sendCheckInReminder?: boolean;
  sendCheckOutReminder?: boolean;
  reminderHoursBefore?: number;

  // Integration Settings
  enableOTASync?: boolean;
  enableChannelManager?: boolean;
  enablePMSIntegration?: boolean;

  // Loyalty & CRM
  enableLoyaltyProgram?: boolean;
  loyaltyPointsRate?: number;
  enableGuestSegmentation?: boolean;

  // Reporting
  reportingCurrency?: string;
  reportingTimezone?: string;
  enableAutoReports?: boolean;

  // Security & Compliance
  dataRetentionDays?: number;
  enableAuditLog?: boolean;
  requireApprovalForHighValueBookings?: boolean;
  highValueThreshold?: number;
}

export class HotelOperationSettingsDto {
  @ApiPropertyOptional({ description: 'Default check-in time (HH:mm format)', example: '15:00' })
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Default check-out time (HH:mm format)', example: '11:00' })
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' })
  timezone?: string;

  @ApiPropertyOptional({ description: 'Currency code', example: 'VND' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Default cleaning duration in minutes', example: 120 })
  defaultCleaningDuration?: number;

  @ApiPropertyOptional({ description: 'Grace period for late check-out in minutes', example: 30 })
  gracePeriodMinutes?: number;

  @ApiPropertyOptional({ description: 'Auto-assign rooms when booking is confirmed', example: true })
  autoAssignRooms?: boolean;

  @ApiPropertyOptional({ description: 'Enable/disable hourly booking mode', example: false })
  hourlyBooking?: boolean;

  @ApiPropertyOptional({ enum: ['hourly', 'daily'], description: 'Preferred booking mode', example: 'daily' })
  preferBookingMode?: 'hourly' | 'daily';

  @ApiPropertyOptional({
    type: 'object',
    description: 'Business hours (start and end times)',
    example: { start: '06:00', end: '22:00' },
    additionalProperties: false,
    properties: {
      start: { type: 'string', example: '06:00' },
      end: { type: 'string', example: '22:00' }
    }
  })
  businessHours?: {
    start: string;
    end: string;
  };
}

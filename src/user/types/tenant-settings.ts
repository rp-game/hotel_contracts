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

/**
 * Hotel Operation Settings DTO - Re-exported from inventory
 * The canonical definition is in inventory/rest/hotel-settings.dto.ts
 * Re-exported here for backward compatibility
 */
export { HotelOperationSettingsDto } from '../../inventory/rest/hotel-settings.dto';

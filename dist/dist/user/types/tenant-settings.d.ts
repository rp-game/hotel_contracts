/**
 * Comprehensive Tenant Settings Type
 */
export interface TenantSettings {
    defaultCheckInTime?: string;
    defaultCheckOutTime?: string;
    maxAdvanceBookingDays?: number;
    minAdvanceBookingHours?: number;
    allowSameDayBooking?: boolean;
    requireDeposit?: boolean;
    depositPercentage?: number;
    freeCancellationHours?: number;
    cancellationFeePercentage?: number;
    noCancellationPolicy?: boolean;
    allowRoomUpgrade?: boolean;
    autoAssignRooms?: boolean;
    roomAssignmentStrategy?: 'MANUAL' | 'AUTOMATIC' | 'HYBRID';
    dynamicPricing?: boolean;
    seasonalRates?: boolean;
    weekendSurcharge?: number;
    holidaySurcharge?: number;
    requireGuestId?: boolean;
    allowWalkIn?: boolean;
    maxGuestsPerRoom?: number;
    childAge?: number;
    acceptedPaymentMethods?: string[];
    autoGenerateInvoice?: boolean;
    sendPaymentReminder?: boolean;
    housekeepingBuffer?: number;
    maintenanceWindow?: {
        startTime: string;
        endTime: string;
    };
    sendBookingConfirmation?: boolean;
    sendCheckInReminder?: boolean;
    sendCheckOutReminder?: boolean;
    reminderHoursBefore?: number;
    enableOTASync?: boolean;
    enableChannelManager?: boolean;
    enablePMSIntegration?: boolean;
    enableLoyaltyProgram?: boolean;
    loyaltyPointsRate?: number;
    enableGuestSegmentation?: boolean;
    reportingCurrency?: string;
    reportingTimezone?: string;
    enableAutoReports?: boolean;
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
//# sourceMappingURL=tenant-settings.d.ts.map
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
export declare class HotelOperationSettingsDto {
    checkInTime?: string;
    checkOutTime?: string;
    timezone?: string;
    currency?: string;
    defaultCleaningDuration?: number;
    gracePeriodMinutes?: number;
    autoAssignRooms?: boolean;
    hourlyBooking?: boolean;
    preferBookingMode?: 'hourly' | 'daily';
    businessHours?: {
        start: string;
        end: string;
    };
}
//# sourceMappingURL=tenant-settings.d.ts.map
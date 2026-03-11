/**
 * Channel Provider Status Enum
 *
 * Represents the operational status of a channel provider configuration
 */
export declare enum ProviderStatus {
    /** Provider is active and operational */
    ACTIVE = "ACTIVE",
    /** Provider configuration is inactive */
    INACTIVE = "INACTIVE",
    /** Provider is undergoing maintenance */
    MAINTENANCE = "MAINTENANCE",
    /** Provider has encountered an error */
    ERROR = "ERROR"
}
/**
 * Channel Provider Type Enum
 *
 * Represents the different types of channel/PMS providers
 * that the system can integrate with.
 *
 * Values match API Gateway ProviderType enum EXACTLY (PascalCase)
 */
export declare enum ProviderType {
    /** STAAH integration */
    STAAH = "STAAH",
    /** SiteMinder integration */
    SITEMINDER = "SiteMinder",
    /** Beds24 integration */
    BEDS24 = "Beds24",
    /** RateGain integration */
    RATEGAIN = "RateGain"
}
/**
 * Sync Direction Enum
 *
 * Represents the direction of data synchronization
 * between the system and external channel providers
 */
export declare enum SyncDirection {
    /** Data flows from system to provider */
    OUTBOUND = "OUTBOUND",
    /** Data flows from provider to system */
    INBOUND = "INBOUND",
    /** Data flows in both directions */
    BIDIRECTIONAL = "BIDIRECTIONAL"
}
/**
 * Sync Operation Enum
 *
 * Represents the types of synchronization operations
 * that can be performed with external channel providers
 *
 * Values match API Gateway SyncOperation enum EXACTLY
 */
export declare enum SyncOperation {
    /** Inventory synchronization */
    INVENTORY_SYNC = "INVENTORY_SYNC",
    /** Rate synchronization */
    RATE_SYNC = "RATE_SYNC",
    /** Booking synchronization */
    BOOKING_SYNC = "BOOKING_SYNC",
    /** Full synchronization of all data */
    FULL_SYNC = "FULL_SYNC"
}
/**
 * Sync Status Enum
 *
 * Represents the result/status of a synchronization operation
 * Values match API Gateway SyncStatus enum EXACTLY
 */
export declare enum SyncStatus {
    /** Synchronization is pending execution */
    PENDING = "PENDING",
    /** Synchronization is currently in progress */
    IN_PROGRESS = "IN_PROGRESS",
    /** Synchronization completed successfully */
    SUCCESS = "SUCCESS",
    /** Synchronization completed with partial success (some records failed) */
    PARTIAL = "PARTIAL",
    /** Synchronization failed completely */
    FAILED = "FAILED",
    /** Synchronization was cancelled */
    CANCELLED = "CANCELLED"
}
/**
 * Sync Trigger Enum
 *
 * Represents the different ways a synchronization
 * operation can be initiated with a channel provider
 */
export declare enum SyncTrigger {
    /** Manually triggered by user action */
    MANUAL = "MANUAL",
    /** Triggered by scheduled job/cron */
    SCHEDULED = "SCHEDULED",
    /** Triggered by incoming webhook from provider */
    WEBHOOK = "WEBHOOK",
    /** Triggered by inventory change in the system */
    INVENTORY_CHANGE = "INVENTORY_CHANGE",
    /** Triggered by rate/pricing change in the system */
    RATE_CHANGE = "RATE_CHANGE",
    /** Triggered by booking event */
    BOOKING_EVENT = "BOOKING_EVENT"
}
//# sourceMappingURL=channel.enum.d.ts.map
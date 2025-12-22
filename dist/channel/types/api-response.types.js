"use strict";
/**
 * API Gateway Response DTO Types
 *
 * These types define the response structures that API Gateway expects
 * from channel-service NATS handlers. Channel-service should return
 * these DTO structures to ensure end-to-end type safety.
 *
 * These types match the API Gateway DTOs exactly to eliminate the need
 * for transformation layers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryAction = exports.ErrorSeverity = exports.ErrorType = exports.ABTestStatus = exports.FailoverStatus = exports.FailoverTrigger = void 0;
/**
 * Failover Trigger Enum
 */
var FailoverTrigger;
(function (FailoverTrigger) {
    FailoverTrigger["MANUAL"] = "MANUAL";
    FailoverTrigger["AUTOMATIC"] = "AUTOMATIC";
    FailoverTrigger["HEALTH_CHECK_FAILED"] = "HEALTH_CHECK_FAILED";
    FailoverTrigger["ERROR_RATE_EXCEEDED"] = "ERROR_RATE_EXCEEDED";
    FailoverTrigger["RESPONSE_TIME_EXCEEDED"] = "RESPONSE_TIME_EXCEEDED";
})(FailoverTrigger || (exports.FailoverTrigger = FailoverTrigger = {}));
/**
 * Failover Status Enum
 */
var FailoverStatus;
(function (FailoverStatus) {
    FailoverStatus["PENDING"] = "PENDING";
    FailoverStatus["IN_PROGRESS"] = "IN_PROGRESS";
    FailoverStatus["COMPLETED"] = "COMPLETED";
    FailoverStatus["FAILED"] = "FAILED";
    FailoverStatus["ROLLED_BACK"] = "ROLLED_BACK";
})(FailoverStatus || (exports.FailoverStatus = FailoverStatus = {}));
/**
 * A/B Test Status Enum
 */
var ABTestStatus;
(function (ABTestStatus) {
    ABTestStatus["DRAFT"] = "DRAFT";
    ABTestStatus["ACTIVE"] = "ACTIVE";
    ABTestStatus["PAUSED"] = "PAUSED";
    ABTestStatus["COMPLETED"] = "COMPLETED";
    ABTestStatus["CANCELLED"] = "CANCELLED";
})(ABTestStatus || (exports.ABTestStatus = ABTestStatus = {}));
/**
 * Error Type Enum
 */
var ErrorType;
(function (ErrorType) {
    ErrorType["CONNECTION"] = "CONNECTION";
    ErrorType["AUTHENTICATION"] = "AUTHENTICATION";
    ErrorType["VALIDATION"] = "VALIDATION";
    ErrorType["MAPPING"] = "MAPPING";
    ErrorType["RATE_LIMIT"] = "RATE_LIMIT";
    ErrorType["TIMEOUT"] = "TIMEOUT";
    ErrorType["DATA_MISMATCH"] = "DATA_MISMATCH";
    ErrorType["PROVIDER_ERROR"] = "PROVIDER_ERROR";
    ErrorType["UNKNOWN"] = "UNKNOWN";
})(ErrorType || (exports.ErrorType = ErrorType = {}));
/**
 * Error Severity Enum
 */
var ErrorSeverity;
(function (ErrorSeverity) {
    ErrorSeverity["LOW"] = "LOW";
    ErrorSeverity["MEDIUM"] = "MEDIUM";
    ErrorSeverity["HIGH"] = "HIGH";
    ErrorSeverity["CRITICAL"] = "CRITICAL";
})(ErrorSeverity || (exports.ErrorSeverity = ErrorSeverity = {}));
/**
 * Recovery Action Enum
 */
var RecoveryAction;
(function (RecoveryAction) {
    RecoveryAction["RETRY"] = "RETRY";
    RecoveryAction["SKIP"] = "SKIP";
    RecoveryAction["MANUAL_INTERVENTION"] = "MANUAL_INTERVENTION";
    RecoveryAction["FAILOVER"] = "FAILOVER";
    RecoveryAction["QUEUE_FOR_LATER"] = "QUEUE_FOR_LATER";
})(RecoveryAction || (exports.RecoveryAction = RecoveryAction = {}));
//# sourceMappingURL=api-response.types.js.map
"use strict";
/**
 * Points Expiration NATS Contracts
 *
 * Patterns:
 * - crm.loyalty.points_expiration.stats
 * - crm.loyalty.points_expiration.schedule
 * - crm.loyalty.points_expiration.member_segments
 * - crm.loyalty.points_expiration.retention_opportunities
 * - crm.loyalty.points_expiration.notification_effectiveness
 * - crm.loyalty.points_expiration.rules.get
 * - crm.loyalty.points_expiration.rules.create
 * - crm.loyalty.points_expiration.settings.get
 * - crm.loyalty.points_expiration.settings.update
 * - crm.loyalty.points_expiration.process
 * - crm.loyalty.points_expiration.members.find_all
 *
 * Handler: crm-service (PointsExpirationNatsController)
 * Called by: api-gateway (CrmController)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberWithExpiringPointsNatsResponse = exports.PointsExpirationBatchNatsResponse = exports.PointsExpirationStatsDataNatsResponse = exports.StatsMetadataNatsResponse = exports.RetentionOpportunityNatsResponse = exports.MemberSegmentStatsNatsResponse = exports.ExpirationScheduleItemNatsResponse = exports.ExpirationOverviewNatsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Expiration Overview Stats (nested in full stats response)
 */
class ExpirationOverviewNatsResponse {
    totalPointsExpiring;
    membersAffected;
    averagePointsPerMember;
    expirationValue;
}
exports.ExpirationOverviewNatsResponse = ExpirationOverviewNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points expiring across all periods' }),
    __metadata("design:type", Number)
], ExpirationOverviewNatsResponse.prototype, "totalPointsExpiring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members affected by expiration' }),
    __metadata("design:type", Number)
], ExpirationOverviewNatsResponse.prototype, "membersAffected", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average points per member expiring' }),
    __metadata("design:type", Number)
], ExpirationOverviewNatsResponse.prototype, "averagePointsPerMember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monetary value of expiring points' }),
    __metadata("design:type", Number)
], ExpirationOverviewNatsResponse.prototype, "expirationValue", void 0);
/**
 * Expiration Schedule Item (period breakdown)
 */
class ExpirationScheduleItemNatsResponse {
    period;
    points;
    members;
    value;
}
exports.ExpirationScheduleItemNatsResponse = ExpirationScheduleItemNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period identifier (e.g., "30 days", "60 days", "90 days")' }),
    __metadata("design:type", String)
], ExpirationScheduleItemNatsResponse.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points expiring in this period' }),
    __metadata("design:type", Number)
], ExpirationScheduleItemNatsResponse.prototype, "points", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members affected in this period' }),
    __metadata("design:type", Number)
], ExpirationScheduleItemNatsResponse.prototype, "members", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monetary value of expiring points in this period' }),
    __metadata("design:type", Number)
], ExpirationScheduleItemNatsResponse.prototype, "value", void 0);
/**
 * Member Segment Statistics (tier breakdown)
 */
class MemberSegmentStatsNatsResponse {
    tier;
    expiringPoints;
    members;
    averagePerMember;
}
exports.MemberSegmentStatsNatsResponse = MemberSegmentStatsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier name or segment identifier' }),
    __metadata("design:type", String)
], MemberSegmentStatsNatsResponse.prototype, "tier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points expiring for this segment' }),
    __metadata("design:type", Number)
], MemberSegmentStatsNatsResponse.prototype, "expiringPoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members in this segment' }),
    __metadata("design:type", Number)
], MemberSegmentStatsNatsResponse.prototype, "members", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average expiring points per member in segment' }),
    __metadata("design:type", Number)
], MemberSegmentStatsNatsResponse.prototype, "averagePerMember", void 0);
/**
 * Retention Opportunity (suggested actions)
 */
class RetentionOpportunityNatsResponse {
    action;
    targetMembers;
    estimatedConversion;
    potentialSavings;
}
exports.RetentionOpportunityNatsResponse = RetentionOpportunityNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recommended action to retain members' }),
    __metadata("design:type", String)
], RetentionOpportunityNatsResponse.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members this action targets' }),
    __metadata("design:type", Number)
], RetentionOpportunityNatsResponse.prototype, "targetMembers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated conversion rate/success rate' }),
    __metadata("design:type", Number)
], RetentionOpportunityNatsResponse.prototype, "estimatedConversion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Potential savings or value recovered' }),
    __metadata("design:type", Number)
], RetentionOpportunityNatsResponse.prototype, "potentialSavings", void 0);
/**
 * Metadata for stats response
 */
class StatsMetadataNatsResponse {
    dataSource;
    generatedAt;
}
exports.StatsMetadataNatsResponse = StatsMetadataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data source identifier', example: 'DATABASE' }),
    __metadata("design:type", String)
], StatsMetadataNatsResponse.prototype, "dataSource", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When stats were generated', format: 'date-time' }),
    __metadata("design:type", String)
], StatsMetadataNatsResponse.prototype, "generatedAt", void 0);
/**
 * Complete Points Expiration Stats Response (actual NATS response structure)
 * Pattern: crm.loyalty.points_expiration.stats
 */
class PointsExpirationStatsDataNatsResponse {
    overview;
    expirationSchedule;
    memberSegments;
    retentionOpportunities;
    _metadata;
}
exports.PointsExpirationStatsDataNatsResponse = PointsExpirationStatsDataNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overview statistics', type: ExpirationOverviewNatsResponse }),
    __metadata("design:type", ExpirationOverviewNatsResponse)
], PointsExpirationStatsDataNatsResponse.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expiration schedule by period', type: [ExpirationScheduleItemNatsResponse] }),
    __metadata("design:type", Array)
], PointsExpirationStatsDataNatsResponse.prototype, "expirationSchedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member segment statistics', type: [MemberSegmentStatsNatsResponse] }),
    __metadata("design:type", Array)
], PointsExpirationStatsDataNatsResponse.prototype, "memberSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Retention opportunities', type: [RetentionOpportunityNatsResponse] }),
    __metadata("design:type", Array)
], PointsExpirationStatsDataNatsResponse.prototype, "retentionOpportunities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response metadata', type: StatsMetadataNatsResponse }),
    __metadata("design:type", StatsMetadataNatsResponse)
], PointsExpirationStatsDataNatsResponse.prototype, "_metadata", void 0);
/**
 * Points Expiration Batch Response
 * Matches: crm-service PointsExpirationBatch entity
 */
class PointsExpirationBatchNatsResponse {
    id;
    tenantId;
    batchName;
    batchType;
    status;
    processingDate;
    startedAt;
    completedAt;
    totalRecords;
    processedRecords;
    successfulRecords;
    failedRecords;
    skippedRecords;
    durationSeconds;
    triggerSource;
    triggeredBy;
    processingParameters;
    processingSummary;
    errorSummary;
    errorDetails;
    logFilePath;
    createdAt;
}
exports.PointsExpirationBatchNatsResponse = PointsExpirationBatchNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Batch ID', type: 'number' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Batch name/description' }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "batchName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of batch operation', enum: ['EXPIRATION_PROCESSING', 'NOTIFICATION_SENDING', 'STATS_CALCULATION'] }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "batchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Batch status', enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED'] }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When processing started', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "processingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When batch started', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When batch completed', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total records in batch' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "totalRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Records successfully processed' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "processedRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Records processed successfully' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "successfulRecords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Records that failed' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "failedRecords", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Records skipped' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "skippedRecords", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Processing duration in seconds' }),
    __metadata("design:type", Number)
], PointsExpirationBatchNatsResponse.prototype, "durationSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Source of batch trigger', enum: ['SCHEDULED_JOB', 'MANUAL', 'API_CALL', 'EVENT_TRIGGER'] }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "triggerSource", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User/system who triggered batch' }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "triggeredBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Processing parameters' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "processingParameters", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Processing summary/statistics' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "processingSummary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Error summary with details' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "errorSummary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional error details' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "errorDetails", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Path to batch log file' }),
    __metadata("design:type", String)
], PointsExpirationBatchNatsResponse.prototype, "logFilePath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'When batch was created', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], PointsExpirationBatchNatsResponse.prototype, "createdAt", void 0);
/**
 * Member with Expiring Points (for list display)
 */
class MemberWithExpiringPointsNatsResponse {
    memberId;
    customerId;
    customerName;
    customerEmail;
    customerPhone;
    programName;
    memberTier;
    totalPoints;
    pointsToExpire;
    daysUntilExpiration;
    expirationDate;
    memberStatus;
    lastActivityDate;
}
exports.MemberWithExpiringPointsNatsResponse = MemberWithExpiringPointsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member ID' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone number' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program name' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "programName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member tier name' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "memberTier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current total points balance' }),
    __metadata("design:type", Number)
], MemberWithExpiringPointsNatsResponse.prototype, "totalPoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points expiring soon' }),
    __metadata("design:type", Number)
], MemberWithExpiringPointsNatsResponse.prototype, "pointsToExpire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Days until points expire' }),
    __metadata("design:type", Number)
], MemberWithExpiringPointsNatsResponse.prototype, "daysUntilExpiration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expiration date', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], MemberWithExpiringPointsNatsResponse.prototype, "expirationDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Member status' }),
    __metadata("design:type", String)
], MemberWithExpiringPointsNatsResponse.prototype, "memberStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last activity date', type: String, format: 'date-time' }),
    __metadata("design:type", Object)
], MemberWithExpiringPointsNatsResponse.prototype, "lastActivityDate", void 0);
//# sourceMappingURL=points-expiration.nats.js.map
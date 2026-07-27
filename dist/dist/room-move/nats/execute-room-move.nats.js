"use strict";
/**
 * Execute Room Move NATS Contract
 *
 * NATS Pattern: room-move.execute
 * Handler: booking-service
 * Called by: api-gateway
 * Modes: standard, mobile-start, mobile-complete, quick-transfer
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
exports.ExecuteRoomMoveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ExecuteRoomMoveRequest {
    moveRequestId;
    executedBy;
    executedByName;
    mode;
    moveCompleted;
    actualMoveStartTime;
    actualMoveEndTime;
    actualDuration;
    guestSatisfied;
    satisfactionRating;
    guestFeedback;
    keyCardsGenerated;
    housekeepingNotified;
    notes;
    // Porter information
    porterId;
    porterName;
    // Luggage and belongings
    luggageTransferred;
    luggageTransferNotes;
    transferredItems;
    // Room inspection
    roomInspectionCompleted;
    roomInspectionNotes;
    roomIssues;
    // Completion details
    completionNotes;
    issuesEncountered;
    followUpRequired;
    // Financial transactions
    chargesApplied;
    appliedCharges;
    refundProcessed;
    refundAmount;
    tenantId;
    hotelId;
}
exports.ExecuteRoomMoveRequest = ExecuteRoomMoveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Move request ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "moveRequestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User executing the move' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "executedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Name of user executing the move' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "executedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution mode', enum: ['standard', 'mobile-start', 'mobile-complete', 'quick-transfer'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the move is completed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "moveCompleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual move start time (ISO datetime)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "actualMoveStartTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual move end time (ISO datetime)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "actualMoveEndTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExecuteRoomMoveRequest.prototype, "actualDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether guest is satisfied' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "guestSatisfied", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Satisfaction rating (1-5)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExecuteRoomMoveRequest.prototype, "satisfactionRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest feedback' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "guestFeedback", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether key cards were generated' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "keyCardsGenerated", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether housekeeping was notified' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "housekeepingNotified", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Execution notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Porter ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "porterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Porter name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "porterName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether luggage was transferred' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "luggageTransferred", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Luggage transfer notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "luggageTransferNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of transferred items' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ExecuteRoomMoveRequest.prototype, "transferredItems", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether room inspection was completed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "roomInspectionCompleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room inspection notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "roomInspectionNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room issues found during inspection' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ExecuteRoomMoveRequest.prototype, "roomIssues", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "completionNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issues encountered during move' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ExecuteRoomMoveRequest.prototype, "issuesEncountered", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether follow-up is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "followUpRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether charges were applied' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "chargesApplied", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amount of applied charges' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExecuteRoomMoveRequest.prototype, "appliedCharges", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether refund was processed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ExecuteRoomMoveRequest.prototype, "refundProcessed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Refund amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExecuteRoomMoveRequest.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExecuteRoomMoveRequest.prototype, "hotelId", void 0);
//# sourceMappingURL=execute-room-move.nats.js.map
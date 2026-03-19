"use strict";
/**
 * Travel Agent REST DTOs
 * Used by api-gateway controllers for request validation
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
exports.FindCommissionRecordsQueryDto = exports.FindTravelAgentsQueryDto = exports.UpdateTravelAgentDto = exports.CreateTravelAgentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const travel_agent_enum_1 = require("../enums/travel-agent.enum");
class CreateTravelAgentDto {
    agentName;
    iataNumber;
    taxCode;
    address;
    contactPerson;
    email;
    phone;
    commissionRate;
    commissionType;
    paymentTermDays;
    bankAccount;
    bankName;
    contractNumber;
    contractStartDate;
    contractEndDate;
    salesPersonId;
    salesPersonName;
    notes;
}
exports.CreateTravelAgentDto = CreateTravelAgentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Travel agent name', example: 'Vietnam Travel Co.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "agentName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IATA number', example: '12345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "iataNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code', example: '0123456789' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address', example: '123 Nguyen Hue, Ho Chi Minh City' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name', example: 'Nguyen Van A' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address', example: 'contact@travel.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number', example: '+84901234567' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission rate', example: 10.00, default: 10.00 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateTravelAgentDto.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission type', enum: travel_agent_enum_1.CommissionType, default: travel_agent_enum_1.CommissionType.PERCENTAGE }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(travel_agent_enum_1.CommissionType),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment term in days', example: 30, default: 30 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTravelAgentDto.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank account number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "bankAccount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTravelAgentDto.prototype, "notes", void 0);
class UpdateTravelAgentDto {
    agentName;
    iataNumber;
    taxCode;
    address;
    contactPerson;
    email;
    phone;
    commissionRate;
    commissionType;
    paymentTermDays;
    bankAccount;
    bankName;
    contractNumber;
    contractStartDate;
    contractEndDate;
    status;
    salesPersonId;
    salesPersonName;
    notes;
}
exports.UpdateTravelAgentDto = UpdateTravelAgentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Travel agent name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "agentName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IATA number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "iataNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact person name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission rate' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateTravelAgentDto.prototype, "commissionRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission type', enum: travel_agent_enum_1.CommissionType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(travel_agent_enum_1.CommissionType),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "commissionType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment term in days' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateTravelAgentDto.prototype, "paymentTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank account number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "bankAccount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bank name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "contractStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "contractEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Status', enum: travel_agent_enum_1.TravelAgentStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(travel_agent_enum_1.TravelAgentStatus),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sales person name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "salesPersonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTravelAgentDto.prototype, "notes", void 0);
class FindTravelAgentsQueryDto {
    search;
    status;
    page;
    limit;
    sortBy;
    salesPersonId;
    sortOrder;
}
exports.FindTravelAgentsQueryDto = FindTravelAgentsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by agent name, code, or contact person' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTravelAgentsQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: travel_agent_enum_1.TravelAgentStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(travel_agent_enum_1.TravelAgentStatus),
    __metadata("design:type", String)
], FindTravelAgentsQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-indexed)', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindTravelAgentsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindTravelAgentsQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTravelAgentsQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by sales person ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTravelAgentsQueryDto.prototype, "salesPersonId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['ASC', 'DESC']),
    __metadata("design:type", String)
], FindTravelAgentsQueryDto.prototype, "sortOrder", void 0);
class FindCommissionRecordsQueryDto {
    hotelId;
    status;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindCommissionRecordsQueryDto = FindCommissionRecordsQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindCommissionRecordsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindCommissionRecordsQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindCommissionRecordsQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindCommissionRecordsQueryDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindCommissionRecordsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindCommissionRecordsQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=travel-agent.dto.js.map
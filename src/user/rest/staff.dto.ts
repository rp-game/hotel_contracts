import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsBoolean, IsUUID, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { StaffStatus, Department } from '../enums';

/**
 * ============================================================================
 * STAFF MANAGEMENT CONTRACT DTOs
 * ============================================================================
 * @description Single source of truth for staff management types
 * @usage Used by BOTH API Gateway (REST) and User Service (NATS)
 * @pattern Contract Unification - classes with @ApiProperty decorators
 * @created 2026-02-13
 * ============================================================================
 */

// ============================================================================
// REQUEST DTOs
// ============================================================================

/**
 * Create Staff DTO
 * @usage POST /api/users/staff (REST) + user.staff.create (NATS)
 * @unified Combines CreateStaffRequestDto (NATS) + CreateUserStaffDto (REST)
 */
export class CreateStaffDto {
  // Core user fields (from CreateUserRequestDto - NATS)
  @ApiProperty({ description: 'Staff email address', example: 'staff@hotel.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Staff password (for new account)' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'First name', example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({
    description: 'Staff roles - array of role names',
    type: [String],
    example: ['HOUSEKEEPING_STAFF', 'FRONT_DESK']
  })
  @IsArray()
  @IsString({ each: true })
  roles: string[];

  // Staff-specific required fields
  @ApiProperty({ description: 'Hotel ID where staff works' })
  @IsUUID()
  hotelId: string;

  // Staff-specific optional fields (from CreateUserStaffDto - REST)
  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Staff position/job title', example: 'Receptionist' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({
    description: 'Department',
    enum: Department,
    example: Department.FRONT_DESK
  })
  @IsOptional()
  @IsEnum(Department)
  department?: Department;

  @ApiPropertyOptional({ description: 'Employee ID' })
  @IsOptional()
  @IsString()
  employeeId?: string;

  @ApiPropertyOptional({
    description: 'Staff status',
    enum: StaffStatus,
    default: StaffStatus.ACTIVE
  })
  @IsOptional()
  @IsEnum(StaffStatus)
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Hire date (ISO 8601)', example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  hireDate?: string;

  @ApiPropertyOptional({ description: 'Staff permissions', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Shift schedule information' })
  @IsOptional()
  @IsString()
  shiftSchedule?: string;

  @ApiPropertyOptional({ description: 'Supervisor user ID' })
  @IsOptional()
  @IsUUID()
  supervisorId?: string;

  @ApiPropertyOptional({ description: 'Is account active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Update Staff Status DTO
 * @usage PATCH /api/users/staff/:id/status (REST) + user.staff.updateStatus (NATS)
 * @unified Matches UpdateStaffStatusRequestDto (NATS)
 */
export class UpdateStaffStatusDto {
  @ApiProperty({
    description: 'New staff status',
    enum: StaffStatus,
    example: StaffStatus.ON_LEAVE
  })
  @IsEnum(StaffStatus)
  status: StaffStatus;
}

// ============================================================================
// RESPONSE DTOs
// ============================================================================

/**
 * Staff DTO
 * @description Complete staff member information
 * @usage Response data for staff operations
 */
export class StaffDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Email address' })
  email: string;

  @ApiProperty({ description: 'First name' })
  firstName: string;

  @ApiProperty({ description: 'Last name' })
  lastName: string;

  @ApiProperty({
    description: 'Staff roles',
    type: [String],
    example: ['HOUSEKEEPING_STAFF']
  })
  roles: string[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Employee ID' })
  employeeId?: string;

  @ApiPropertyOptional({ description: 'Position/title' })
  position?: string;

  @ApiPropertyOptional({
    description: 'Staff status',
    enum: StaffStatus
  })
  staffStatus?: StaffStatus;

  @ApiPropertyOptional({ description: 'Department' })
  department?: string;

  @ApiProperty({ description: 'Is account active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Phone number' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Hire date' })
  hireDate?: string;

  @ApiPropertyOptional({ description: 'Staff permissions', type: [String] })
  permissions?: string[];

  @ApiPropertyOptional({ description: 'Shift schedule' })
  shiftSchedule?: string;

  @ApiPropertyOptional({ description: 'Supervisor user ID' })
  supervisorId?: string;

  @ApiPropertyOptional({ description: 'Last login timestamp' })
  lastLogin?: string;

  @ApiProperty({ description: 'Created timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated timestamp' })
  updatedAt: string;
}

/**
 * Staff List Response DTO
 * @usage GET /api/users/staff (REST) + user.staff.findAll (NATS response)
 */
export class StaffListResponseDto {
  @ApiProperty({
    description: 'List of staff members',
    type: [StaffDto],
  })
  data: StaffDto[];

  @ApiProperty({ description: 'Total count of staff' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Create Staff Response DTO
 * @usage POST /api/users/staff response
 */
export class CreateStaffResponseDto {
  @ApiProperty({ description: 'Created staff data', type: StaffDto })
  data: StaffDto;

  @ApiProperty({ description: 'Success message' })
  message: string;
}

/**
 * Staff Response DTO
 * @usage Single staff operation responses (update status, etc.)
 */
export class StaffResponseDto {
  @ApiProperty({ description: 'Staff data', type: StaffDto })
  data: StaffDto;

  @ApiProperty({ description: 'Operation message' })
  message?: string;
}

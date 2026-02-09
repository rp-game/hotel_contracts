import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Checkout Automation Settings
 * Controls automatic task creation after guest checkout
 */
export class CheckoutAutomationSettingsDto {
  @ApiProperty({ description: 'Enable checkout automation', example: true })
  enabled: boolean;

  @ApiProperty({ description: 'Create cleaning task after checkout', example: true })
  createTaskAfterCheckout: boolean;

  @ApiProperty({ description: 'Default task type for checkout cleaning', example: 'CHECKOUT_CLEANING' })
  defaultTaskType: string;

  @ApiProperty({ description: 'Default priority for checkout tasks', example: 'HIGH' })
  defaultPriority: string;

  @ApiProperty({ description: 'Estimated duration in minutes', example: 45 })
  estimatedDuration: number;

  @ApiProperty({
    description: 'Task assignment strategy',
    enum: ['auto', 'manual', 'round-robin'],
    example: 'auto'
  })
  assignmentStrategy: 'auto' | 'manual' | 'round-robin';
}

/**
 * Check-in Automation Settings
 * Controls room inspection requirements before guest check-in
 */
export class CheckinAutomationSettingsDto {
  @ApiProperty({ description: 'Enable check-in automation', example: true })
  enabled: boolean;

  @ApiProperty({ description: 'Require inspection before check-in', example: true })
  requireInspectionBeforeCheckin: boolean;

  @ApiProperty({ description: 'Auto-create inspection task', example: true })
  autoCreateInspectionTask: boolean;

  @ApiProperty({ description: 'Inspection duration in minutes', example: 15 })
  inspectionDuration: number;
}

/**
 * Auto Assignment Settings
 * Controls automatic task assignment to staff
 */
export class AutoAssignmentSettingsDto {
  @ApiProperty({ description: 'Enable auto assignment', example: true })
  enabled: boolean;

  @ApiProperty({
    description: 'Assignment strategy',
    enum: ['best-match', 'round-robin', 'least-busy'],
    example: 'best-match'
  })
  assignmentStrategy: 'best-match' | 'round-robin' | 'least-busy';

  @ApiProperty({ description: 'Maximum tasks per staff member', example: 5 })
  maxTasksPerStaff: number;

  @ApiProperty({ description: 'Assignment interval in minutes', example: 15 })
  assignmentInterval: number;

  @ApiProperty({ description: 'Consider staff skills when assigning', example: true })
  considerSkills: boolean;

  @ApiProperty({ description: 'Consider current workload when assigning', example: true })
  considerWorkload: boolean;
}

/**
 * Overdue Monitoring Settings
 * Controls monitoring and escalation of overdue tasks
 */
export class OverdueMonitoringSettingsDto {
  @ApiProperty({ description: 'Enable overdue monitoring', example: true })
  enabled: boolean;

  @ApiProperty({ description: 'Overdue threshold in hours', example: 2 })
  overdueThreshold: number;

  @ApiProperty({ description: 'Enable escalation for overdue tasks', example: true })
  escalationEnabled: boolean;

  @ApiProperty({
    description: 'Email addresses for notifications',
    type: [String],
    example: ['manager@hotel.com']
  })
  notificationEmails: string[];

  @ApiProperty({ description: 'Check interval in minutes', example: 30 })
  checkInterval: number;
}

/**
 * Automation Last Run Times
 * Tracks when each automation type last ran
 */
export class AutomationLastRunTimesDto {
  @ApiPropertyOptional({ description: 'Last auto assignment run time', type: Date })
  autoAssignment?: Date;

  @ApiPropertyOptional({ description: 'Last task creation run time', type: Date })
  taskCreation?: Date;

  @ApiPropertyOptional({ description: 'Last overdue processing run time', type: Date })
  overdueProcessing?: Date;
}

/**
 * Automation Settings DTO
 * Unified DTO for both NATS messages and REST responses
 * Ensures consistency between housekeeping-service and api-gateway
 */
export class AutomationSettingsDto {
  @ApiProperty({ description: 'Settings record ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  hotelId: string;

  @ApiProperty({
    description: 'Checkout automation configuration',
    type: CheckoutAutomationSettingsDto
  })
  checkoutAutomation: CheckoutAutomationSettingsDto;

  @ApiProperty({
    description: 'Check-in automation configuration',
    type: CheckinAutomationSettingsDto
  })
  checkinAutomation: CheckinAutomationSettingsDto;

  @ApiProperty({
    description: 'Auto assignment configuration',
    type: AutoAssignmentSettingsDto
  })
  autoAssignment: AutoAssignmentSettingsDto;

  @ApiProperty({
    description: 'Overdue monitoring configuration',
    type: OverdueMonitoringSettingsDto
  })
  overdueMonitoring: OverdueMonitoringSettingsDto;

  @ApiProperty({
    description: 'Last run times for each automation type',
    type: AutomationLastRunTimesDto
  })
  lastRunTimes: AutomationLastRunTimesDto;

  @ApiProperty({ description: 'Global automation enabled flag', example: true })
  automationEnabled: boolean;

  @ApiProperty({ description: 'Record creation timestamp', type: Date })
  createdAt: Date;

  @ApiProperty({ description: 'Record last update timestamp', type: Date })
  updatedAt: Date;
}

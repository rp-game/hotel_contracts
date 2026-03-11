import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsEnum, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ShiftType, ShiftStatus } from '../enums/shift.enum';

export class ShiftScheduleDto {
  @ApiProperty({ description: 'Schedule ID' })
  id: string;

  @ApiProperty({ description: 'Schedule date', example: '2025-08-17' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Start time', example: '08:00' })
  @IsString()
  startTime: string;

  @ApiProperty({ description: 'End time', example: '16:00' })
  @IsString()
  endTime: string;

  @ApiProperty({ description: 'Shift type', enum: ShiftType })
  @IsEnum(ShiftType)
  shiftType: ShiftType;

  @ApiProperty({ description: 'Department' })
  @IsString()
  department: string;

  @ApiProperty({ description: 'Location' })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Shift status', enum: ShiftStatus })
  @IsEnum(ShiftStatus)
  status: ShiftStatus;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class StaffScheduleRequestDto {
  @ApiProperty({ description: 'Start date for schedule query', example: '2025-08-17' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date for schedule query', example: '2025-08-23' })
  @IsDateString()
  endDate: string;
}

export class StaffScheduleResponseDto {
  @ApiProperty({ description: 'List of shift schedules', type: [ShiftScheduleDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ShiftScheduleDto)
  schedules: ShiftScheduleDto[];

  @ApiProperty({ description: 'Total schedules count' })
  @IsNumber()
  total: number;
}

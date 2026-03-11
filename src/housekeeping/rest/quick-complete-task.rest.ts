import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsArray, IsDateString } from 'class-validator';

export class QuickCompleteTaskDto {
  @ApiProperty({ description: 'Completion notes', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Task quality rating 1-5', required: false })
  @IsOptional()
  @IsNumber()
  qualityRating?: number;

  @ApiProperty({ description: 'Completion photos', required: false })
  @IsOptional()
  @IsArray()
  photos?: string[];

  @ApiProperty({ description: 'Completion timestamp', required: false })
  @IsOptional()
  @IsDateString()
  completedAt?: string;
}

export class QuickCompleteTaskResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Completed task ID' })
  taskId: string;

  @ApiProperty({ description: 'Completion timestamp' })
  completedAt: string;

  @ApiProperty({ description: 'Response message' })
  message: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AchievementCategory } from '../enums/user.enum';

export class PerformanceMetricsDto {
  @ApiProperty({ description: 'Time period', example: 'current_month' })
  @IsString()
  period: string;

  @ApiProperty({ description: 'Tasks completed count' })
  @IsNumber()
  tasksCompleted: number;

  @ApiProperty({ description: 'Tasks assigned count' })
  @IsNumber()
  tasksAssigned: number;

  @ApiProperty({ description: 'Average completion time in minutes' })
  @IsNumber()
  averageCompletionTime: number;

  @ApiProperty({ description: 'Customer rating out of 5' })
  @IsNumber()
  customerRating: number;

  @ApiProperty({ description: 'Punctuality score percentage' })
  @IsNumber()
  punctualityScore: number;

  @ApiProperty({ description: 'Teamwork score percentage' })
  @IsNumber()
  teamworkScore: number;

  @ApiProperty({ description: 'Overall performance score' })
  @IsNumber()
  overallScore: number;
}

export class AchievementDto {
  @ApiProperty({ description: 'Achievement ID' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Achievement title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Achievement description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Date earned' })
  @IsDateString()
  dateEarned: string;

  @ApiProperty({ description: 'Achievement icon' })
  @IsString()
  icon: string;

  @ApiProperty({ description: 'Achievement category', enum: AchievementCategory })
  @IsEnum(AchievementCategory)
  category: AchievementCategory;
}

export class PerformanceRankDto {
  @ApiProperty({ description: 'Current rank position' })
  @IsNumber()
  position: number;

  @ApiProperty({ description: 'Total staff count' })
  @IsNumber()
  totalStaff: number;

  @ApiProperty({ description: 'Department name' })
  @IsString()
  department: string;
}

export class PerformanceDataDto {
  @ApiProperty({ description: 'Current month metrics', type: PerformanceMetricsDto })
  @ValidateNested()
  @Type(() => PerformanceMetricsDto)
  currentMonth: PerformanceMetricsDto;

  @ApiProperty({ description: 'Last month metrics', type: PerformanceMetricsDto })
  @ValidateNested()
  @Type(() => PerformanceMetricsDto)
  lastMonth: PerformanceMetricsDto;

  @ApiProperty({ description: 'Last 3 months metrics', type: PerformanceMetricsDto })
  @ValidateNested()
  @Type(() => PerformanceMetricsDto)
  last3Months: PerformanceMetricsDto;

  @ApiProperty({ description: 'Recent achievements', type: [AchievementDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AchievementDto)
  achievements: AchievementDto[];

  @ApiProperty({ description: 'Staff rank information', type: PerformanceRankDto })
  @ValidateNested()
  @Type(() => PerformanceRankDto)
  rank: PerformanceRankDto;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, MinLength } from 'class-validator';
import { FeedbackType, FeedbackPriority } from '../enums';

export class FeedbackDto {
  @ApiProperty({ description: 'Feedback type', enum: FeedbackType })
  @IsEnum(FeedbackType)
  type: FeedbackType;

  @ApiProperty({ description: 'Feedback subject' })
  @IsString()
  @MinLength(5)
  subject: string;

  @ApiProperty({ description: 'Detailed description' })
  @IsString()
  @MinLength(10)
  description: string;

  @ApiProperty({ description: 'Priority level', enum: FeedbackPriority })
  @IsEnum(FeedbackPriority)
  priority: FeedbackPriority;

  @ApiProperty({ description: 'Contact email' })
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ description: 'User agent/platform' })
  @IsString()
  userAgent: string;

  @ApiProperty({ description: 'App version' })
  @IsString()
  appVersion: string;
}

export class FeedbackResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Feedback ID' })
  feedbackId: string;

  @ApiProperty({ description: 'Response message' })
  message: string;
}

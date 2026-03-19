import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  Length,
} from 'class-validator';
import { UserResponseDto } from '../../user/nats/user.nats';

// ============= NATS Request DTOs =============

export class LoginNatsRequest {
  @ApiProperty({ description: 'Email address', example: 'john.doe@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password', example: 'StrongP@ssw0rd', minLength: 8, maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  password: string;

  @ApiPropertyOptional({ description: 'Client IP address' })
  @IsOptional()
  @IsString()
  ipAddress?: string;

  @ApiPropertyOptional({ description: 'Client User-Agent' })
  @IsOptional()
  @IsString()
  userAgent?: string;
}

export class CreateUserCredentialsNatsRequest {
  @ApiProperty({ description: 'User ID from user-service' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Email address' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Hashed password' })
  @IsNotEmpty()
  @IsString()
  hashedPassword: string;

  @ApiPropertyOptional({ description: 'Whether email is verified', default: false })
  @IsOptional()
  @IsBoolean()
  emailVerified?: boolean;
}

export class RefreshTokenNatsRequest {
  @ApiProperty({ description: 'Refresh token' })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

export class LogoutNatsRequest {
  @ApiPropertyOptional({ description: 'Refresh token to revoke' })
  @IsString()
  @IsOptional()
  refreshToken?: string;
}

export class CheckPermissionNatsRequest {
  @ApiProperty({ description: 'User ID' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Resource to check' })
  @IsNotEmpty()
  @IsString()
  resource: string;

  @ApiProperty({ description: 'Action to check' })
  @IsNotEmpty()
  @IsString()
  action: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;
}

export class ChangePasswordNatsRequest {
  @ApiProperty({ description: 'User ID' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Current password' })
  @IsNotEmpty()
  @IsString()
  currentPassword: string;

  @ApiProperty({ description: 'New password' })
  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  newPassword: string;
}

export class ResetPasswordNatsRequest {
  @ApiProperty({ description: 'Email address' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

// ============= NATS Response DTOs =============

export class LoginNatsResponse {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'JWT refresh token' })
  refreshToken: string;

  @ApiProperty({ description: 'Token type', example: 'Bearer' })
  tokenType: string;

  @ApiProperty({ description: 'Expiration in seconds' })
  expiresIn: number;

  @ApiProperty({ description: 'User info', type: () => UserResponseDto })
  user: UserResponseDto;
}

export class ValidationNatsResponse {
  @ApiProperty({ description: 'Permission validation result' })
  isValid: boolean;

  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty({ description: 'User permissions', type: [String] })
  permissions: string[];

  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;
}

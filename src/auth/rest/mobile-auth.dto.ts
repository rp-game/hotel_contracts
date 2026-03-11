/**
 * Mobile Auth Contract DTOs
 * @description Types for staff mobile authentication endpoints
 * @usage Used by API Gateway (REST) for mobile auth flows
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

/**
 * Zalo OAuth Authentication Request
 * @usage POST /api/staff/auth/zalo
 */
export class ZaloAuthDto {
  @ApiProperty({ description: 'Zalo authorization code' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Zalo access token' })
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty({ description: 'Zalo user ID' })
  @IsString()
  @IsNotEmpty()
  zaloUserId: string;

  @ApiProperty({ description: 'User name from Zalo' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Phone number from Zalo' })
  @IsPhoneNumber('VN')
  phone: string;

  @ApiPropertyOptional({ description: 'Avatar URL from Zalo' })
  @IsOptional()
  @IsString()
  avatar?: string;
}

/**
 * Link Zalo Account Request
 * @usage POST /api/staff/link-zalo-account
 */
export class LinkZaloAccountDto {
  @ApiProperty({ description: 'Zalo user ID' })
  @IsString()
  @IsNotEmpty()
  zaloUserId: string;

  @ApiProperty({ description: 'Zalo phone number' })
  @IsPhoneNumber('VN')
  zaloPhone: string;

  @ApiProperty({ description: 'Zalo user name' })
  @IsString()
  @IsNotEmpty()
  zaloName: string;

  @ApiProperty({ description: 'Staff employee ID' })
  @IsString()
  @IsNotEmpty()
  staffEmployeeId: string;

  @ApiProperty({ description: 'Admin generated linking code' })
  @IsString()
  @IsNotEmpty()
  linkingCode: string;

  @ApiPropertyOptional({ description: 'Zalo avatar URL' })
  @IsOptional()
  @IsString()
  zaloAvatar?: string;
}

/**
 * Select Hotel for Session
 * @usage POST /api/staff/select-hotel
 */
export class SelectHotelDto {
  @ApiProperty({ description: 'Hotel ID to select for current session' })
  @IsString()
  @IsNotEmpty()
  hotelId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  @IsNotEmpty()
  tenantId: string;
}

/**
 * System Login Request (email/password)
 * @usage POST /api/staff/auth/system-login
 */
export class SystemLoginDto {
  @ApiProperty({ description: 'Staff email address' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Staff password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({ description: 'Specific hotel ID to login to' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Specific tenant ID to login to' })
  @IsOptional()
  @IsString()
  tenantId?: string;
}

/**
 * Staff Hotel Info — response for accessible hotels
 * @usage GET /api/staff/hotels
 */
export class StaffHotelInfo {
  @ApiProperty({ description: 'Hotel ID' })
  id: string;

  @ApiProperty({ description: 'Hotel name' })
  name: string;

  @ApiProperty({ description: 'Hotel address' })
  address: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Staff role at this hotel' })
  role: string;

  @ApiProperty({ description: 'Whether this is the default hotel for staff' })
  isDefault: boolean;
}

/**
 * Extracted user object from auth response
 */
export class MobileAuthUserDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User phone' })
  phone: string;

  @ApiProperty({ description: 'User roles', type: [String] })
  roles: string[];

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Avatar URL' })
  avatar?: string;
}

/**
 * Available hotel in auth response
 */
export class AvailableHotelDto {
  @ApiProperty({ description: 'Hotel ID' })
  id: string;

  @ApiProperty({ description: 'Hotel name' })
  name: string;

  @ApiProperty({ description: 'Hotel address' })
  address: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;
}

/**
 * Mobile Auth Response
 * @usage Response from POST /api/staff/auth/zalo, POST /api/staff/auth/system-login
 */
export class MobileAuthResponseDto {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'JWT refresh token' })
  refreshToken: string;

  @ApiProperty({ description: 'User information', type: MobileAuthUserDto })
  user: MobileAuthUserDto;

  @ApiPropertyOptional({ description: 'Available hotels for staff', type: [AvailableHotelDto] })
  availableHotels?: AvailableHotelDto[];
}

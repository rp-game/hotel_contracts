import { ApiProperty } from '@nestjs/swagger';

export class HotelHardDeleteNatsRequest {
  @ApiProperty() hotelId: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() tenantType: string; // TenantType enum: INDIVIDUAL_HOTEL | HOTEL_CHAIN | HOTEL_CHAIN_SUB | PLATFORM | AGENCY
  @ApiProperty() requestedBy: string;
  @ApiProperty() timestamp: string;
}

export class HotelHardDeleteNatsResponse {
  @ApiProperty() success: boolean;
  @ApiProperty() hotelId: string;
  @ApiProperty() deletedCount: number;
  @ApiProperty({ required: false }) message?: string;
  @ApiProperty({ required: false }) error?: string;
}

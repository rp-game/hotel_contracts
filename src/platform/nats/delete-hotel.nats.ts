import { ApiProperty } from '@nestjs/swagger';

export class HotelHardDeleteNatsRequest {
  @ApiProperty() hotelId: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() tenantType: string; // 'HOTEL' | 'HOTEL_CHAIN' | 'PLATFORM'
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

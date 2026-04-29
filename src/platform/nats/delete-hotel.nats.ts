import { ApiProperty } from '@nestjs/swagger';

export class DeleteHotelNatsRequest {
  @ApiProperty() hotelId: string;
  @ApiProperty() tenantId: string;
  @ApiProperty() requestedBy: string;
  @ApiProperty() timestamp: string;
}

export class DeleteHotelNatsResponse {
  @ApiProperty() success: boolean;
  @ApiProperty() hotelId: string;
  @ApiProperty() deletedCount: number;
  @ApiProperty({ required: false }) message?: string;
  @ApiProperty({ required: false }) error?: string;
}

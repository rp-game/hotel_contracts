import { ApiProperty } from '@nestjs/swagger';

export class HousekeepingTaskCompletedEvent {
  @ApiProperty() tenantId: string;
  @ApiProperty() hotelId: string;
  @ApiProperty() taskId: string;
  @ApiProperty() roomId: string;
  @ApiProperty({ description: 'Task type: CHECKOUT_CLEAN, STAY_CLEAN, DEEP_CLEAN, etc.' })
  taskType: string;
  @ApiProperty() completedAt: string;
}

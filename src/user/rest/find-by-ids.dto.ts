import { IsArray, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUsersByIdsDto {
  @IsArray()
  @IsUUID('4', { each: true })
  @ApiProperty({ description: 'Danh sách user ID cần resolve tên', type: [String] })
  ids: string[];
}

export class UserSlimDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Tên đầy đủ' })
  fullName: string;
}

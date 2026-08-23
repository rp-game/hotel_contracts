import { IsArray, IsUUID, ArrayMaxSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUsersByIdsDto {
  @IsArray()
  @ArrayMaxSize(200)
  @IsUUID('4', { each: true })
  @ApiProperty({ description: 'Danh sách user ID cần resolve tên (tối đa 200)', type: [String] })
  ids: string[];
}

export class UserSlimDto {
  @ApiProperty({ description: 'User ID' })
  id: string;

  @ApiProperty({ description: 'Tên đầy đủ' })
  fullName: string;
}

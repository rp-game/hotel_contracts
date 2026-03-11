import { ApiProperty } from '@nestjs/swagger';

export class AvatarUploadResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Uploaded avatar URL' })
  avatarUrl: string;

  @ApiProperty({ description: 'Response message' })
  message: string;
}

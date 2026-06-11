export type OtaMappingStatus = 'pending' | 'active' | 'error';

export interface StaahOtaChannel {
  key: string;
  displayName: string;
  staahChannelId: number;
}

export interface ChannelOtaMapping {
  id: string;
  providerId: string;
  hotelId: string;
  tenantId: string;
  ratePlanId: string;
  roomTypeId: string;
  otaChannelId: number;
  otaChannelName: string;
  channelHotelId: string;
  channelRoomId: string;
  channelRateId: string;
  externalRoomId: string | null;
  externalRatePlanId: string | null;
  defaultAdultRate: number | null;
  defaultChildRate: number | null;
  mappingStatus: OtaMappingStatus;
  lastSyncedAt: string | null;
  syncErrorMessage: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateChannelOtaMappingDto {
  providerId: string;
  hotelId: string;
  tenantId: string;
  ratePlanId: string;
  roomTypeId: string;
  otaChannelId: number;
  otaChannelName: string;
  channelHotelId: string;
  channelRoomId: string;
  channelRateId: string;
  defaultAdultRate?: number | null;
  defaultChildRate?: number | null;
}

export interface UpdateChannelOtaMappingDto {
  channelHotelId?: string;
  channelRoomId?: string;
  channelRateId?: string;
  defaultAdultRate?: number | null;
  defaultChildRate?: number | null;
  isActive?: boolean;
}

export interface SyncOtaMappingsResult {
  success: boolean;
  total: number;
  synced: number;
  failed: number;
  errors: Array<{ mappingId: string; error: string }>;
}

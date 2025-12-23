/**
 * Hotel Chain NATS Contracts
 *
 * Patterns:
 * - hotel-chains.update
 *
 * Handler: user-service (HotelChainsNatsController)
 * Called by: api-gateway (HotelChainsService)
 */
import { NatsResponse } from '../../common';
import type { UpdateHotelChainDto, HotelChain } from '../types/hotel-chain.types';
/**
 * Update Hotel Chain Request
 * Pattern: hotel-chains.update
 *
 * Update hotel chain information with partial updates supported.
 * All fields in updateDto are optional.
 */
export interface UpdateHotelChainNatsRequest {
    id: string;
    updateDto: UpdateHotelChainDto;
}
export type UpdateHotelChainNatsResponse = NatsResponse<HotelChain>;
//# sourceMappingURL=hotel-chain.nats.d.ts.map
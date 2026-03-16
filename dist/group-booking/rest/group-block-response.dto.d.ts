/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
 */
import { GroupBlockSummary, GroupBlockDetails } from '../types/group-block.types';
/**
 * Paginated list response for group blocks
 */
export declare class GroupBlockListResponseDto {
    data: GroupBlockSummary[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
/**
 * Single group block response wrapper
 */
export declare class GroupBlockResponseDto {
    data: GroupBlockDetails;
}
//# sourceMappingURL=group-block-response.dto.d.ts.map
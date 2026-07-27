/**
 * Unified DTO for FindStaffByHotel operations
 * Used for both REST API requests and NATS message payloads
 * Ensures consistency between frontend requests and backend NATS contracts
 *
 * @pattern: Single source of truth for request structure
 */
import { StaffStatus } from '../enums';
/**
 * Request DTO for finding staff by hotel
 *
 * Used in:
 * 1. REST API: GET /housekeeping/staff
 * 2. NATS Message: 'users.staff.findByHotel'
 *
 * All fields are optional to allow flexible filtering
 */
export declare class FindStaffByHotelQueryDto {
    hotelId?: string;
    roles?: string;
    status?: StaffStatus;
    role?: string;
    department?: string;
    /**
     * NATS payload conversion
     * Extracts only fields needed for NATS message
     */
    toNatsPayload(): {
        hotelId: string;
        roles?: string[];
        status?: StaffStatus;
    };
}
//# sourceMappingURL=find-staff-by-hotel.dto.d.ts.map